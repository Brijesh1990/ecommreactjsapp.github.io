import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/Login";
class RegisterUs extends Component
{
render()
{
    return (
<>    
<Header />
<div className="container-fluid bg-white content  mt-1 p-5">
    <div className="row">
     <div className='col-md-4'>
      <p> 24x7 support</p>

    </div>   
    <div className='col-md-8'>
      <h2 align="center">Create account with Us</h2>
      <hr className='border border-1 border-dark' />
      <p align="center">Just about us content</p>
    <div className="container   shadow-sm  p-2">
    <form method="post">
        <h3 className="text-center  login-heading p-2">Register Form</h3>
        <hr className="border border-1 border-dark w-50 mx-auto" />
        <div className="form-group col-md-9 mt-3 mx-auto">
            <input type="text" name="email" placeholder="Email *" required className="form-control" />
        </div>
        <div className="form-group col-md-9 mt-3 mx-auto">
            <input type="password" name="pass" placeholder="Password *" required className="form-control" />
        </div>
        <div className="form-group col-md-9 mt-3 mx-auto">
            <input type="password" name="cpass" placeholder="Confirm Password *" required className="form-control" />
        </div>

        <div className="form-group col-md-9 mt-3 mx-auto">
            <input type="number" name="phone" placeholder="Phone *" required className="form-control" />
        </div>

        <div className="form-group col-md-9 mt-3 mx-auto">
            <input type="file" name="photo" placeholder="Upload photo *" required className="form-control" />
        </div>

        <div className="form-group col-md-9 mt-3 mx-auto">
            <textarea name="address" placeholder="Address *" required className="form-control"></textarea>
        </div>

        <div className="form-group col-md-9 mt-3 mx-auto">
            <input type="submit" name="register" className="btn btn-lg btn-success" value="Register" />
            <input type="submit" name="reset" className="btn btn-lg btn-danger ms-3" value="Reset" />
           
        </div>
    
        
        <div className="form-group col-md-9 mt-3 mx-auto">
            <b className="text-dark">Already have an account ? <Link to="#" data-bs-toggle="modal" data-bs-target="#log">Login here</Link></b>
        </div>
        
    </form>
    </div>
        
    </div>
    </div>
</div>
<Footer />
<Login />
</>

)
}
}

export default RegisterUs;

