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
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/catalogue');
        } catch (error) {
            console.log(error.message);
            // eslint-disable-next-line no-restricted-globals
            confirm(`${error.message}`);
        }
    };
    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;

        if (repeatPassword !== registerData.password) {
            // eslint-disable-next-line no-restricted-globals
            confirm(`Passwords do not match!`);
            return;
        }
        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/catalogue');
        } catch (error) {
            console.log(error.message);
            // eslint-disable-next-line no-restricted-globals
            confirm(`${error.message}`);
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
            // eslint-disable-next-line no-restricted-globals
            confirm(`${error.message}`);
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
        // this is double negation
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
