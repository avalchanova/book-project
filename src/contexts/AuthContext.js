import { createContext, useContext } from "react";
// AuthContext is just a context which only purpose is to pass something to the children
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

import { authServiceFactory } from "../services/authService.js";

// creating context
export const AuthContext = createContext();
// this is a component/ something like a wrapper component
export const AuthProvider = ({
    children,
    //in props there is always a property "children"
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {}); // вместо useState({})
    // useLocalStorage взема име и дефолт валю -> аут и празен масив
    const navigate = useNavigate();
    // this state has to persist in the local storage because when refreshed the user is automatically logged out
    // react does not have a close connection with the local storage so it does not know when there is a change

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/catalogue');
        } catch (error) {
            console.log(error.message);
        }
    };
    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;
        // by destructuring we create a new obj registerData which will exclude repeatPassword

        if (repeatPassword !== registerData.password) {
            return; // TODO: throw error for user
        }
        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/catalogue');
        } catch (error) {
            console.log(error.message);
        }
    };

    const onLogout = async () => {
        await authService.logout(); //will logout on the server
        setAuth({}); //will logout on the client
        // localStorage.clear(); //clears the auth
        localStorage.removeItem('auth');
        navigate('/');
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
        // it returns each truthy value in true and each falsy value in false
        // for instance a string "afvjd" will be converted in false and then finally in true
    };
    // console.log(contextValues.firstName);

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
