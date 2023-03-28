import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

const Logout = () => {
    const { onLogout } = useContext(AuthContext); // ?? what exactly?

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Navigate to="/" />;
};

export default Logout;