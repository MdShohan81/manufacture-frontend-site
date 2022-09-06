import './App.css';
import {Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menubar from './Shared/Menubar/Menubar'
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ProductDetail from './Pages/Home/ProductDetail/ProductDetail';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Order from './Pages/Order/Order';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Profile/Profile';
import User from './Pages/User/User';
import MyReview from './Pages/MyReview/MyReview';
import RequireAdmin from './Pages/Login/RequireAdmin/RequireAdmin';


function App() {
  return (
    <div>
      <Menubar></Menubar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/product/:productId' element={
              <RequireAuth>
                <ProductDetail></ProductDetail>
              </RequireAuth>
            }>
            </Route>
            <Route path='/dashboard' element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }>
            <Route index element={<Profile></Profile>}></Route>
            <Route path='order' element={<Order></Order>}></Route>
            <Route path='user' element={<RequireAdmin>
              <User></User>
            </RequireAdmin>}></Route>
            <Route path='myreview' element={<MyReview></MyReview>}></Route>
            </Route>

             
            </Routes>
           
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
