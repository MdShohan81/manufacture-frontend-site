import './App.css';
import {Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menubar from './Shared/Menubar/Menubar'
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div>
      <Menubar></Menubar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
