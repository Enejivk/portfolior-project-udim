import {
    IoNotifications,
    MdDashboardCustomize,
    RiMoneyDollarBoxFill,
    RiGroupLine,
    MdPermIdentity,
    LiaPeopleCarrySolid,
} from '../allIcons'

import './sideBar.css'

const Sidebar = () => {
    return (
        <aside className="home-side-bar">
            <p><MdDashboardCustomize /><a href="">Overview</a></p>
            <p><RiMoneyDollarBoxFill /> <a href="">Finance</a></p>
            <p>< RiGroupLine /><a href="">Members</a></p>
            <p>< MdPermIdentity /><a href="">Profile</a></p>
            <p>< LiaPeopleCarrySolid /><a href="">Debtors</a></p>
            <p>< IoNotifications /><a href="">Notification</a></p>
        </aside>

    )
}
export default Sidebar