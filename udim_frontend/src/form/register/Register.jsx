import { useState } from "react";
import { PiIdentificationBadgeDuotone } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLockPerson } from "react-icons/md";
import { MdOutlineLockReset } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";

import groupOfFriends from '../../assets/groupOfFriend.png'
import * as Yup from "yup";
import './Register.css'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name is required"),
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
        <main className="signUp-container">

            <form className="form" onSubmit={handleSubmit}>
                <h1>Get Started</h1>
                <div>
                    <div className="input-container">
                        <PiIdentificationBadgeDuotone />
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            placeholder="Full Name"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.fullName && <div className="error">{errors.fullName}</div>}
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
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <FiEye />
                    </div>
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>

                <div>
                    <div className="input-container">
                        <MdOutlineLockReset />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            placeholder="Confirm your Password"
                            onChange={handleChange}
                        />
                        <FiEye />
                    </div>
                    {errors.confirmPassword && (
                        <div className="error">{errors.confirmPassword}</div>
                    )}
                </div>
                <button type="submit">Sign Up</button>
                <div className="third_party_sign">
                    <div className="auth-icons">
                        <FcGoogle />
                    </div>
                    <div className="auth-icons">
                        <RiTwitterXLine color="#1DA1F2" />
                    </div>
                    <div className="auth-icons">
                        <FaMeta color="#1877F2" />
                    </div>
                </div>
            </form>
            <section className="image-section">
                <h1>Ready to experience the power of group giving and saving? Sign up for free today</h1>
            </section>
        </main>
    );
};

export default RegistrationForm;