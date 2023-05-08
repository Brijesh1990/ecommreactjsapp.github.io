import React from "react";
function Register()
{
    return (
       <>

<div className="container   shadow-sm  p-2">
<form method="post">
    <h4 className="text-center text-dark login-heading">Register Form</h4>
    <hr className="border border-1 border-dark w-50 mx-auto" />
    <div className="form-group col-md-9 mt-3 mx-auto">
        <input type="text" name="email" placeholder="Email *" required className="form-control" />
    </div>
    <div className="form-group col-md-9 mt-3 mx-auto">
        <input type="password" name="pass" placeholder="Password *" required className="form-control" />
    </div>
    <div className="form-group col-md-9 mt-3 mx-auto">
        <input type="submit" name="login" className="btn btn-lg btn-success" value="Register" />
      
    </div>
    <div className="form-group col-md-9 mt-3 mx-auto">
        <b className="text-dark">Already have an account ? <a href="" data-bs-toggle="modal" data-bs-target="#reg">Login Here</a></b>
    </div>
</form>

</div>

       </>
    )
}

export default Register;