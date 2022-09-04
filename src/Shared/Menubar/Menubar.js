import React from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';
import logo from  '../../assets/logo.png'
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Menubar = () => {
    const [user] = useAuthState(auth);

    const logOut = () =>{
      signOut(auth);
      
    }

    return (
        <div className="navbar bg-black text-white">
    <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-secondary rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blogs</Link></li>
      <li><Link to='/portfolio'>Portfolio</Link></li> 
      <li><Link to='/order'>Order</Link></li> 
      <li>{ user ?
            <Link onClick={logOut} to='/signout'>Signout</Link>
            :
            <Link to='/login'>Login</Link>
      }</li>
    
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl logo-img" to='/'><img src={logo} alt="logo" /></Link>
  </div>
  <div className="navbar-end font-semibold text-lg hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blogs</Link></li>
      <li><Link to='/portfolio'>Portfolio</Link></li>      
      <li><Link to='/order'>Order</Link></li>      
    <li>{ user ?
            <Link onClick={logOut} to='/signout'>Signout</Link>
            :
            <Link to='/login'>Login</Link>
      }</li>
      
      
    </ul>
  </div>
  
</div>
    );
};

export default Menubar;