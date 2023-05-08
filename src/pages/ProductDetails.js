import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Products()
{
return (
    <>
<Header />
<div className="container-fluid content bg-white  mt-1 p-5">
<nav style={{ '--bs-breadcrumb-divider':"'>'" }} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item">Products</li>
    <li className="breadcrumb-item active" aria-current="page">ProductDetails</li>
  </ol>
</nav>


    <div class="row">
        <div class="col-md-4 shadow  p-3 m-3 h-75">
        <img src="images/mens/1.webp" class="img-fluid" style={{width:"80%", height: "200px" }} />   

        <img src="images/mens/2.webp" class="img-fluid img-thumbnail ms-2" style={{width:"25%", height: "80px" }} />   
        <img src="images/mens/3.webp" class="img-fluid img-thumbnail ms-2" style={{width:"25%", height: "80px" }} />   
        <img src="images/mens/4.webp" class="img-fluid img-thumbnail ms-2" style={{width:"25%", height: "80px" }} />   

        </div>
        <div class="col-md-7  p-2">
             
                   <p>Reebook sports</p>
                   <p><b>Rs.4500-/ <del>Rs.6500-/</del></b></p>
                   <p><input type="number" name="qty" min="1" max="10" value="1" /></p>
                   <p><b className="text-success">Subtotals of Rs. </b>6500-/</p>
                   <b><button class="btn btn-sm btn-success">Continue Shop</button> <Link to="/viewcart"><button class="btn btn-sm btn-danger ms-2">AddToCart</button></Link></b>
              
                   <div className="mt-3 w-75 position-relative">
                   <hr className="w-100" />
                    <h4>Products Details <button className="btn btn-sm bt-white bg-white fs-3 float-end" data-bs-toggle="collapse" data-bs-target="#btn-prod"><i className="bi bi-plus"></i></button></h4>
                    
                    <div className="collapse navbar-collapse" id="btn-prod">
                      <table className="table table-responsive" cellPadding="10" cellSpacing="10">
                        <tr>
                            <th>Color</th>
                            <td>white</td>
                        </tr>
                        <tr>
                            <th>Outer Materials</th>
                            <td>Synthetic leather</td>
                        </tr>
                        <tr>
                            <th>Ideal For</th>
                            <td>Men</td>
                        </tr>
                        <tr>
                            <th>Ocassion</th>
                            <td>Casuals</td>
                        </tr>
                        <tr>
                            <th><Link to="#">Manufatucring , Packaging and Import info</Link></th>
                            
                        </tr>
                      </table>
                    </div>
               
                   <hr className="w-100 mt-5" />
                   </div>
               </div>

    </div>
</div>
<Footer />
    
       </>
    )
}

export default Products;