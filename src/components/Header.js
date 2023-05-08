import React from 'react';
import {Link} from 'react-router-dom';
// const img="../images/back.gif";
function Header()
{
return (

<>    
<div className="container-fluid header p-5">
<div className="row">    
<div className="col-md-4 contact-us">
    <b><i className="bi bi-inbox"></i>&nbsp;<Link to="mailto:info@gmail.com">info@gmail.com</Link> | Call Us :(+91)-9998003879</b>
</div>

<div className="col-md-4">
    <div className="form-group">
        <input type="text" name="search" placeholder="Search anything here..." required className="form-control" />
    </div>
</div>

<div className="col-md-4 social-media">
    <b><Link to="/viewcart"><i className="bi bi-cart"></i>&nbsp;<span className="badge badge-sm bg-danger">(1)</span></Link></b>
    &nbsp;
    <b><Link to="" data-bs-toggle="modal" data-bs-target="#log"><i className="bi bi-person-add"></i>&nbsp;<span className="badge badge-sm bg-dark">(0)</span></Link></b>

    <b><i className="bi bi-facebook"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-linkedin"></i>
    <i className="bi bi-youtube"></i></b>

</div>
</div>
</div>

<nav className="navbar navbar-expand-md bg-dark p-1">

    <Link to="" className="navbar-brand p-1"><i className="bi bi-browser-edge"></i> &nbsp; Yashraj e-commerce</Link>

    <button type="button" className="navbar-toggler  btn-white bg-white" data-bs-toggle="collapse" data-bs-target="#Coll">
        <span className="bi bi-grid-3x2-gap-fill"></span>
    </button>
    
   
   <div className="collapse navbar-collapse" id="Coll">
    <ul className="navbar-link p-1">
    <li><Link to="/"><i className="bi bi-house"></i>Home</Link></li>
    <li><Link to="/aboutus">Aboutus</Link></li>

    <li className="dropdown"><Link className="dropdown-toggle text-white" data-bs-toggle="dropdown" to="#"><i className="bi bi-person"></i> Select Category</Link>
    <ul className="dropdown-menu bg-dark">
        <li><Link to="/products"><i className="bi bi-person"></i> Mens Products</Link></li>
        <li><Link to="/products"><i className="bi bi-person"></i> Kids Products</Link></li>
    </ul>
    </li>
    <li><Link to="/services">OurServices</Link></li>
    <li><Link to="/gallery"><i className="bi bi-image"></i>Gallery</Link></li>
    <li><Link to="/portfolio">Portfolio</Link></li>
    <li className="dropdown"><Link className="dropdown-toggle text-white" data-bs-toggle="dropdown" to="#"><i className="bi bi-person"></i> Account</Link>
    <ul className="dropdown-menu bg-dark">
        <li><Link to="/register"><i className="bi bi-person"></i> SignUp!</Link></li>
        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#log"><i className="bi bi-person"></i> SignIn!</Link></li>
    </ul>
    </li>
    <li><Link to="/contactus">ContactUs</Link></li>
   </ul>
   </div>
</nav>
</>

)

}
export default Header;

