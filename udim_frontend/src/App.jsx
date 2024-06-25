import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LandingPage = lazy(() => import('./landingPage/index'));
const Register = lazy(() => import('./form/register/Register'));
const LoginForm = lazy(() => import('./form/login/Login'));
const Overview = lazy(() => import('./dashboard/overview/Overview'));
const Finances = lazy(() => import('./dashboard/finances/Finances'));
const Profile = lazy(() => import('./dashboard/profile/Profile'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/signUp" element={<Register />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/home" element={<Overview />} />
                    <Route path="/finances" element={<Finances />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
