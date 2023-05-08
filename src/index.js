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
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io' element={<App />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/products' element={<Products />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/aboutus' element={<AboutUs />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/contactus' element={<ContactUs />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/cart' element={<Cart />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/login' element={<Login />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/register' element={<RegisterUs />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/products' element={<Products />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/productdetails' element={<ProductDetails />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/viewcart' element={<ViewCart />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/checkout' element={<Checkout />}></Route>
        <Route path='https://brijesh1990.github.io/ecommreactjsapp.github.io/bill' element={<Bill />}></Route>
        <Route path='*' element={<PagenotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
