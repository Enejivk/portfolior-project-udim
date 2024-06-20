import logoBlack from '../../../assets/logoBlack.png'
import heroImage from '../../../assets/heroImage.png'
import './Navbar.css'
import { IoNotifications } from '../allIcons'

const Navbar = () => {
  return (
      <nav className="home-nav-bar">
          <div className="home-logo">
              <img src={logoBlack} alt="" />
          </div>
          <div className='userImage-nort'>
              <IoNotifications fontSize={20} />
              <div className='userImage'>
                  <img src={heroImage} alt='profile picture' />
              </div>
          </div>
      </nav>
  )
}

export default Navbar