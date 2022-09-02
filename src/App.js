
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Menubar from './Shared/Menubar/Menubar'
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
        </Routes>
    </div>
  );
}

export default App;
