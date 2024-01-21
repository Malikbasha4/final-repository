import React, { useState } from 'react';

const ProfilePage = ({ initialUserDetails }) => {
  // Use state to manage user details
  const [userDetails, setUserDetails] = useState(initialUserDetails);

  const handleUpdateDetails = () => {
    // Replace the following logic with actual server request to update user details
    console.log('Simulating user details update:', userDetails);
  };

  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      <form>
        <label>User Name:</label>
        <input
          type="text"
          value={userDetails.userName}
          onChange={(e) => setUserDetails({ ...userDetails, userName: e.target.value })}
        />

        <label>Email:</label>
        <input
          type="email"
          value={userDetails.email}
          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
        />

        {/* Add more input fields for other details like age, gender, dob, mobile, etc. */}

        <button type="button" onClick={handleUpdateDetails}>
          Update Details
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
