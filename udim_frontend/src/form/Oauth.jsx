import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";

export const GoogleLoginBtn = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return (
        <button className="auth-icons" onClick={login} type='button'>
            <FcGoogle />
        </button>
    ); 
}
