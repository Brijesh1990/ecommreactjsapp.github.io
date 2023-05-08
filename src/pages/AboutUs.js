import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

class AboutUs extends Component
{
    render()
    {
        return (
<>    
<Header />
<div class="container-fluid content  mt-1 p-5">
    <div class="row">

      <h2>About us</h2>
      <hr className='border border-1 border-dark' />
      <p>Just about us content</p>
        
    </div>
</div>


<Footer />
</>

)
}
}

export default AboutUs;

