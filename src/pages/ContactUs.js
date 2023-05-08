import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

class ContactUs extends Component
{
    render()
    {
        return (
<>    
<Header />
<div className="container-fluid content  mt-1 p-5">
    <div className="row">
        <div className="col-md-4 shadow bg-light p-3 m-3"><h5 align="center" className="bg-dark text-white p-2">why Contact with us</h5>
        
            <ul className="sidebar-link">
                <li><a href="">24x7 support</a></li>
                <li><a href="">Online Shopping</a></li>
                <li><a href="">Online payments</a></li>
                <li><a href="">Return Policy</a></li>
                <li><a href="">Refund policy</a></li>
                <li><a href="">Home delivery</a></li>
            </ul>

        <h5 align="center" className="bg-dark text-white p-2">Get in Touch with us</h5>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7791544.479773694!2d69.79632200890134!3d17.533030526153276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae136926b14b2d%3A0xd3604d0e3896d703!2sFlipkart%20Bangalore%20office%20-%20B%20block!5e0!3m2!1sen!2sin!4v1672387243619!5m2!1sen!2sin" width="100%" height="220" style={{border:0}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        
        <div className="col-md-7  p-3 m-3">
            <div className="card">
                <div className="card-header">Contact us Form <button type="button" className="btn btn-sm btn-dark float-end">View more </button></div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 ms-5  p-5">
                            <form method="post">
                                <h3 className="login-heading p-2">Contact Form</h3>
                                <hr className="border border-1 border-dark w-50" />
                                <div className="form-group col-md-9 mt-3">
                                    <input type="text" name="name" placeholder="Name *" required className="form-control" />
                                </div>

                                <div className="form-group col-md-9 mt-3">
                                    <input type="text" name="email" placeholder="Email *" required className="form-control" />
                                </div>

                                <div className="row">
                                <div className="form-group col-md-4 mt-3">
                                    <input type="text" name="fname" placeholder="FirstName *" required className="form-control" />
                                </div>
                                
                                <div className="form-group col-md-5 mt-3">
                                    <input type="text" name="lname" placeholder="LastName *" required className="form-control" />
                                </div>
                                </div>
                        
                                <div className="form-group col-md-9 mt-3">
                                    <input type="number" name="phone" placeholder="Phone *" required className="form-control" />
                                </div>
                        
                        
                                <div className="form-group col-md-9 mt-3">
                                    <textarea name="message" placeholder="Message *" required className="form-control"></textarea>
                                </div>
                        
                                <div className="form-group col-md-9 mt-3">
                                    <input type="submit" name="addcontact" className="btn btn-lg btn-success" value="Send" />

                                    <input type="submit" name="reset" className="btn btn-lg btn-danger ms-3" value="Reset" />
                                   
                                </div>
                            
                           
                            </form>
                          
                     
                     
                        </div>
                          </div>
                        

                    </div>
                </div>
            </div>
          


        </div>
    </div>


<Footer />
</>

)
}
}

export default ContactUs;

