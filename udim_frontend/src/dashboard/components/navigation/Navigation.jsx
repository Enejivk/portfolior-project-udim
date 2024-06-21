
import './Navigation.css'
import logoWhite from '../../../assets/logoWhite.png'
import { Link } from 'react-router-dom'

import {
    MdSpaceDashboard,
    MdPermIdentity,
    FaMoneyBillTrendUp,
    GrGroup,
    TbZoomMoneyFilled,
    IoMdNotifications,
    IoMdLogOut
} from '../allIcon'


const navNameAndIcon = [
    { name: 'OVERVIEW', icon: MdSpaceDashboard },
    { name: 'MEMBERS', icon: GrGroup },
    { name: 'PROFILE', icon: MdPermIdentity },
    { name: 'FINANCE', icon: FaMoneyBillTrendUp },
    { name: 'DEBTORS', icon: TbZoomMoneyFilled },
    { name: 'NOTIFICATION', icon: IoMdNotifications },
    { name: 'LOGOUT', icon: IoMdLogOut },
]

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li className="brand">
                    <Link to='/'>
                        <span className="icon">
                            <img src={logoWhite} alt="" className='brandLogo'/>
                        </span>
                    </Link>
                    <div className="toggl">
                        {/* <IonIcon name="menu-outline" /> */}
                    </div>
                </li>

                {navNameAndIcon.map((IconName, index) => (
                    <li key={index}>
                        <a href="#">
                            <span className="icon">
                                <IconName.icon fontSize={27}/>
                            </span>
                            <span className="title">{IconName.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;