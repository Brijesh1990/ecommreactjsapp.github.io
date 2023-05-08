import React from "react";
import {Link} from "react-router-dom";
function Login()
{
return (
    <>    
{/* <!-- login modal --> */}
<div className="modal fade reg-form" role="dialog" id="log">
<div className="modal-dialog">
<div className="modal-content">
<div className="container  shadow-sm  p-2">
<form method="post">
    <h4 className="text-center text-dark login-heading">Login Form</h4>
    <hr className="border border-1 border-dark w-50 mx-auto" />
    <div className="form-group col-md-9 mt-3 mx-auto">
        <input type="text" name="email" placeholder="Email *" required className="form-control" />
    </div>
    <div className="form-group col-md-9 mt-3 mx-auto">
        <input type="password" name="pass" placeholder="Password *" required className="form-control" />
    </div>
    <div className="form-group col-md-9 mt-3 mx-auto">
        <input type="submit" name="login" className="btn btn-lg btn-success" value="Login" />
        <a href="">Forget Password</a>
    </div>
    <div className="form-group col-md-9 mt-3 mx-auto">
        <b className="text-dark">Don't have an account ? <Link to="/register" target="_blank">Create Your account</Link></b>
    </div>
</form>

</div>
</div>
</div>
</div>



      </>
    )
}

export default Login;