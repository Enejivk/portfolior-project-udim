import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage/index';
import Register from './form/register/Register';
import LoginForm from './form/login/Login'
import {Overview} from './dashboard/overview/Overview'
import Finances from './dashboard/finances/Finances'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/signUp" element={<Register />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/home" element={<Overview />} />
                <Route path="/finances" element={<Finances />} />
            </Routes>
        </Router>
    )
}

export default App;
