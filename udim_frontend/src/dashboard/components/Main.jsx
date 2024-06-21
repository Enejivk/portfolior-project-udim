// components/Main.js
import Topbar from './topbar/Topbar';
import CardBox from './cardBox/CardBox';
import Details from './details/Details';
import './Main.css'
const Main = () => {
    return (
        <div className="main">
            <Topbar />
            <CardBox />
            <Details />
        </div>
    );
};

export default Main;
