import React from 'react'
import { useState } from "react";
import { PiIdentificationBadgeDuotone } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLockPerson } from "react-icons/md";
import { MdOutlineLockReset } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";
import { FiEyeOff } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GoogleLoginBtn } from '../Oauth'

import * as Yup from "yup";
import './Register.css';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().required("Email is required").email("Invalid email format"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Confirm password is required"),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            // Handle successful form submission
            console.log("Form data", formData);
            setErrors({});
        } catch (error) {
            const newErrors = {};
            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Validate each field as user types
        validationSchema
            .validateAt(name, { [name]: value })
            .then(() => {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: "",
                }));
            })
            .catch((error) => {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: error.message,
                }));
            });
    };

    return (
        <>
            <Link to='/'>
                <div className="form-close">
                    <IoMdClose fontSize={35} />
                </div>
            </Link>
            <main className="signUp-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Get Started</h1>
                    <div>
                        <div className="input-container">
                            <PiIdentificationBadgeDuotone />
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                placeholder="First Name"
                                onChange={handleChange}
                            />
                        </div>
                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                    </div>

                    <div>
                        <div className="input-container">
                            <PiIdentificationBadgeDuotone />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                placeholder="Last Name"
                                onChange={handleChange}
                            />
                        </div>
                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                    </div>


                    <div>
                        <div className="input-container">
                            <AiOutlineMail />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>

                    <div>
                        <div className="input-container">
                            <MdOutlineLockPerson />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            {showPassword ? <FiEye onClick={() => { setShowPassword(!showPassword) }} />
                                : <FiEyeOff onClick={() => { setShowPassword(!showPassword) }} />
                            }

                        </div>
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>

                    <div>
                        <div className="input-container">
                            <MdOutlineLockReset />
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                placeholder="Confirm Password"
                                onChange={handleChange}
                            />
                            {showConfirmPassword ? <FiEye onClick={() => { setShowConfirmPassword(!showConfirmPassword) }} />
                                : <FiEyeOff onClick={() => { setShowConfirmPassword(!showConfirmPassword) }} />
                            }
                        </div>
                        {errors.confirmPassword && (
                            <div className="error">{errors.confirmPassword}</div>
                        )}
                    </div>
                    <button type="submit">Sign Up</button>

                    <div className="third_party_sign">
                        <p>or continue with </p>

                        <div className="auth-icon-container">
                           < GoogleLoginBtn />
                            <button className="auth-icons" type="button">
                                <RiTwitterXLine color="#1DA1F2" />
                            </button>
                            <button className="auth-icons">
                                <FaMeta color="#1877F2" />
                            </button>
                        </div>
                        <p>Already have an account?<a href="">Login</a></p>
                    </div>
                </form>
                <div className="text-content">
                    <h1>Ready to experience the power of group giving and saving? Sign up for free today</h1>
                </div>
            </main>
        </>
    );
};

export default RegistrationForm;