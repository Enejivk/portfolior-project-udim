import { useState } from "react";
import { PiIdentificationBadgeDuotone } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLockPerson } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GoogleLoginBtn } from '../Oauth'

import * as Yup from "yup";
import '../Form.css';


const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required").email("Invalid email format"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
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
                    <h1>Welcome back</h1>

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
                    <button type="submit">Sign Up</button>

                    <div className="third_party_sign">
                        <div className="auth-icon-container">
                            < GoogleLoginBtn />
                        </div>
                        <p>You don't have an account? <Link to='/signUp'>Sign Up</Link></p>
                    </div>
                </form>
                <div className="text-content">
                    <h1>Ready to experience the power of group giving and saving? Sign up for free today</h1>
                </div>
            </main>
        </>
    );
};

export default LoginForm;