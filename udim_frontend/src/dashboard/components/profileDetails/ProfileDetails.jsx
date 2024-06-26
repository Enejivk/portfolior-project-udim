import Group from '../../../form/Authentication/GetGroups'

const ProfileDetails = () => {
 
  return (
    <div className='profile-container'>
      <div className='profile-image'></div>
      <div className='profile-information'>
        <p><span>name</span><span>{}</span></p>
      </div>
      <Group />
    </div>
  )
}

export default ProfileDetails
