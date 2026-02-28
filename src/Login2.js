import React from 'react'; 
import  './Login.css';
const Login2=()=>{
    return (
        <center>
            <div className="Login-card">
                <h1>My Page </h1>
                <form>
                <div className='form-control'>
                <div>📧<input type="email"placeholder='Email'/></div><br/>
                <div>🔒<input type="password" placeholder="Enter your password"/></div>
                <div><a href="#" className="forgot">Remember me</a><br/>
                <button type="submit">Login</button>
                
            </div>
            
            </div>
            </form>
            </div>
            <div className='Sign up'>
                Not the member?<a href='#'>Sign up</a>
            </div>
    
    
        </center>
    )
    }
    export default Login2

/*import React from 'react';
import './Login2.css';

const Login2 = () => {
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

export default Login2;
*/
