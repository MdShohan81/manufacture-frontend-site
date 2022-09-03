
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Menubar from './Shared/Menubar/Menubar'
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Menubar></Menubar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
