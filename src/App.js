import './App.css';
import {Routes ,Route } from 'react-router-dom';

import Home from './Pages/Home';
import Book from './Pages/Book';
import Vehicles from './Pages/Vehicles';
import Login from './Pages/Login';
import Electronics from './Pages/Electronics'
import Furniture from './Pages/Furniture'
import Registration from './Pages/Registration';
import Sell from './Pages/Sell';

import ViewUserProfile from './Pages/ViewUserProfile';
import AddBook from './Pages/AddBook';
import ViewProduct from './Pages/ViewProduct';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddVehicle from './Pages/AddVehicle';
import AddFurniture from './Pages/AddFurniture';
import AddElectronics from './Pages/AddElectronics';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Book' element={<Book/>}></Route>
      <Route path='/Vehicles' element={<Vehicles/>}></Route>
      <Route path='/Electronics' element={<Electronics/>}></Route>
      <Route path='/Furniture' element={<Furniture/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Registration' element={<Registration/>}></Route>
      <Route path='/Sell' element={<Sell/>}></Route>
      <Route path='/ViewUserProfile' element={<ViewUserProfile/>}> </Route>
      <Route path='/AddBook' element={<AddBook/>}></Route>
      <Route path='/AddVehicle' element={<AddVehicle/>}></Route>
      <Route path='/AddFurniture' element={<AddFurniture/>}></Route>
      <Route path='/AddElectronics' element={<AddElectronics/>}></Route>
      <Route path='/ViewProduct/:id' element={<ViewProduct/>}></Route>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
