import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content p-2">
    <h2 className='text-2xl text-secondary'>{user.displayName}'s DashBoard</h2>
   <Outlet></Outlet>

    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/dashboard/order'>My Item</Link></li>
      <li><Link to='/dashboard/myreview'>My Review</Link></li>
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;