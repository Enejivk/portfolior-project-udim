import React from 'react';
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";

export const GoogleLoginBtn = () => {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            const decodedToken = jwtDecode(tokenResponse.access_token);
            console.log(decodedToken);
        },
    });

    return (
        <button className="auth-icons" onClick={login} type='button'>
            <span>Sign Up with Google</span><FcGoogle />
        </button>
    ); 
}

