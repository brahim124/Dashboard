import React from 'react'
import { Link } from 'react-router-dom';

const login = () => {
  return (
    //export default function MyForm() {
        <form>
          <h1>Login</h1>
        <div className="imgcontainer">
          <img src={require("../data/avatar4.jpg")} alt="img" className="image" />
        </div>
        <div className="container">
        
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit" className="buttonlogin">Login</button>
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
          </label>
        
        <div className="container">
          <button type="button" className="cancelbtn1">Cancel</button>
          <span className="psw"><a href="https://www.facebook.com/">Forget password?</a></span>
        </div>
        <Link to="/signUp" className="sign"> sign up </Link>
        </div>
      </form>
      
    );
  }

export default login