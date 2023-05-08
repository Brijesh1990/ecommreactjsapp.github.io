import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import RegisterUs from './pages/RegisterUs';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import ViewCart from './pages/ViewCart';
import Checkout from './pages/Checkout';
import Bill from './pages/Bill';
import PagenotFound from './pages/PagenotFound';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
// load loader or spinners
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<RegisterUs />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/productdetails' element={<ProductDetails />}></Route>
        <Route path='/viewcart' element={<ViewCart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/bill' element={<Bill />}></Route>
        <Route path='*' element={<PagenotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
