/*import React from 'react'; 
import  './Login.css';
const Login=()=>{
    return (
        <center>
        <div className='login-card'>
            <h2>Sign in with email </h2>
            <p>Make a database with json and document with this login</p>
            <form>
                <div className='form-control'>
                <div>📧<input type="email"placeholder='enter your email'/></div><br/>
                <div>🔒<input type="password" placeholder="Enter your password"/></div>
                <div><a href="#" className="forgot">Forgot Password?</a><br/>
                 <button type="submit">Login</button>
                </div>
                </div>
            </form>
        </div>
        </center>
        
    )
}
export default Login*/
import React from 'react';
import './Login.css';

const Login= () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>LOGIN</h2>

        <form>
          <div className="form-control">
            <span>📧</span>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="form-control">
            <span>🔒</span>
            <input type="password" placeholder="Password" required />
          </div>

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>

        <p className="signup-text">
          Not a member? <a href="#">Sign up now</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
