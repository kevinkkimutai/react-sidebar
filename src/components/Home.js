import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function UserPage() {
  const { id } = useParams();
  // const userId = match.params.id;
  return (
    <div className='main'>
        <Sidebar />
     <div className='container'>
     <h1>User Profile Page</h1>
      <p>User ID: {id}</p>
      {/* Add more user details or components here */}
      </div>
    </div>
  );
}

export default UserPage;


