
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Profile = () => {
  const [user] = useAuthState(auth)
  

  
  


  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 mt-10">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="mx-auto card-title">Profile:</h2>
          <p>Name: {user?.displayName || ""}</p>
          <p>Email: {user?.email || ""}</p>
         
        </div>
      </div>
      {/*  */}
  
    </section>
  );
};

export default Profile;