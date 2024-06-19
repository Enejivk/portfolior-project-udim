import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage/index';
import Register from './form/register/Register';
import LoginForm from './form/login/Login'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/signUp" element={<Register />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </Router>
    )
}

export default App;
