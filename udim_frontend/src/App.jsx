import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage/index';
import Register from './form/register/Register';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/signUp" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App;
