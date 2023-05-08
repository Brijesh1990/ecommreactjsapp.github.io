import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/Login";
class PagenotFound extends Component
{
render()
{
    return (
<>    
<Header />
<div className="container-fluid bg-white content  mt-1 p-5">
  <h4 className='text-center p-4'>Page not found</h4>
</div>
<Footer />
<Login />
</>

)
}
}

export default PagenotFound;

