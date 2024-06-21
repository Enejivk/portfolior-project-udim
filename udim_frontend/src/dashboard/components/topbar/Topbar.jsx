import './Topbar.css'
import { userLogin } from '../allIcon'
const Topbar = () => {
    return (
        <div className="topbar">
            <div className="toggle">
            </div>
            <div className="user">
                <img src={userLogin} alt="" />
            </div>
        </div>
    );
};

export default Topbar;
