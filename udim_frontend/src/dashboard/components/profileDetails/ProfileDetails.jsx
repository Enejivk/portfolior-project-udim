import { useState } from 'react';
import { userLogin } from '../allIcon';
import './ProfileDetail.css';

const bio = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(123) 456-7890',
  address: '1234 Main St, Anytown, USA',
};

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: bio.name,
    email: bio.email,
    phone: bio.phone,
    address: bio.address,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // You can handle the form submission logic here, e.g., update state or make API calls
    console.log('Form submitted with data:', formData);

    bio.name = formData.name;
    bio.email = formData.email;
    bio.phone = formData.phone;
    bio.address = formData.address;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="profile-picture"
        id="profile-picture"
        placeholder="Update profile picture"
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleInputChange}
      />
      <button type="submit">Save changes</button>
    </form>
  );
};

const ProfileDetails = () => {
  const [toggleEditForm, setToggleEditForm] = useState(false);

  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={userLogin} alt="" />
      </div>
      <div className="profile-details">
        <h2>{bio.name}</h2>
        <p>Email: {bio.email}</p>
        <p>Phone: {bio.phone}</p>
        <p>Address: {bio.address}</p>
        <button className="edit-btn" onClick={() => setToggleEditForm(!toggleEditForm)}>
          Edit Profile
        </button>
      </div>
      {toggleEditForm ? <EditProfile /> : null}
    </div>
  );
};

export default ProfileDetails;
