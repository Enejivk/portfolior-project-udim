
import Sidebar from '../component/sidebar/Sidebar'
import Main from '../component/mainContent/Main'
import Navbar from '../component/navbar/Navbar'
import LeftSideBar from '../component/LeftSideBar/LeftSideBar'
import './Overview.css'

const Overview = () => {
    return (
        <main className='home-container'>
            <Navbar />
            <Sidebar />
            <Main />
            <LeftSideBar />
        </main>
    )
}

export default Overview ;
