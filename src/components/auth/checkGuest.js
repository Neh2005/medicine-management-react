import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const checkGuest = (Component) => {
    function Wrapper(props) {
        const user = useSelector((store) => store.auth.user);
        const navigate = useNavigate();

        useEffect(() => {
            // Log the user state for debugging purposes
            console.log("User state in checkGuest:", user);

            if (user && user.token) {
                // If you want to automatically redirect authenticated users to home,
                // keep this line. If you don't want this behavior, remove it.
                navigate('/');
            }
        }, [user, navigate]);

        // Even if the user is authenticated, we will render the login page.
        return <Component {...props} />;
    }

    return Wrapper;
};

export default checkGuest;
