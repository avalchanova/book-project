import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

import { authServiceFactory } from "../services/authService.js";

export const AuthContext = createContext();
export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        const { ...loginData } = data;
        if (loginData.email.length === 0) {
            alert(`Please enter email address.`);
            return;
        }
        if (loginData.password.length === 0) {
            alert(`Please enter password.`);
            return;
        }

        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/catalogue');
        } catch (error) {
            // eslint-disable-next-line no-restricted-globals
            confirm(`${error.message}`);
        }
    };
    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;
        if (registerData.firstName.length === 0) {
            alert(`Please enter your first name.`);
            return;
        }
        if (registerData.lastName.length === 0) {
            alert(`Please enter your last name.`);
            return;
        }
        if (registerData.email.length === 0) {
            alert(`Please enter your email address.`);
            return;
        }
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(registerData.email)) {
            alert(`Please enter a valid email address.`);
            return;
        }
        if (repeatPassword !== registerData.password) {
            alert(`Passwords do not match!`);
            return;
        }
        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/catalogue');
        } catch (error) {
            console.log(error.message);
            alert(`${error.message}`);
        }
    };

    const onLogout = async () => {
        try {
            await authService.logout();
            setAuth({});
            localStorage.removeItem('auth');
            navigate('/');
        } catch (error) {
            console.log(error.message);
            alert(`${error.message}`);
        }
    };


    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        name: auth.firstName,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
};
