
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import Order from './componant/Order/Order';
import Product from './componant/Products/Product';
import Register from './componant/Registar/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path ='/products' element={<Product></Product>}></Route>
        <Route path ="/order" element={<Order/>}></Route>
        <Route path ="/register" element={<Register/>}></Route>
        <Route path ="/login" element={<Login/>}></Route>
      </Routes>
     

     
    </div>
  );
}

export default App;
