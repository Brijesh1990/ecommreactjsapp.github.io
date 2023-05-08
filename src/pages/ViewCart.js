import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function ViewCart()
{
    return (
       <>

<Header />
<div className="container-fluid content bg-white  mt-1 p-5">
<nav style={{ '--bs-breadcrumb-divider':"'>'" }} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item">Products</li>
    <li className="breadcrumb-item active" aria-current="page">ProductDetails/ViewCart</li>
  </ol>
</nav>

        <div class="col-md-11 ms-0 shadow  p-4 m-2 h-75">
        <table className="table table-responsive" cellPadding="5" cellSpacing="5">
        <tr align="center">
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Action</th>
        </tr>
        <tr align="center">
            <td>1001</td>
            <td><img src="images/mens/1.webp" class="img-fluid" style={{width:"85px", height: "85px" }} /></td>   
            <td>Puma shoes</td>
            <td>6500</td>
            <td>1</td>
            <td><i className="bi bi-trash text-danger"></i></td>

        </tr>

        <tr>
            <td colspan="6" align="right" className="p-3 text-white"><p className="w-25 bg-dark p-4">Subtotals of Prducts <label>Rs. 6500-/</label></p></td>
        </tr>
       
     
        <tr>
            <td colspan="6" align="right" className="text-white"><p className="w-25 bg-danger text-white p-3">Go for Payments <i className="bi bi-currency-bitcoin"></i></p></td>
        </tr>
       
     
        </table>

        </div>
</div>
<Footer />
    
       </>
    )
}

export default ViewCart;