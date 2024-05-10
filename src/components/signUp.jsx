import React from 'react'
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <div>
        <div id="id01" className="modal">
          <form className="modal-content">
            <div className="container">
              <h1>Sign Up</h1>
              <div className="imgcontainer">
                <img src={require("../data/avatar4.jpg")} alt="img" className="image" />
              </div>
             
              <label htmlFor="fullname"><b>Full Name </b></label>
              <input type="text" placeholder="Enter Full Name" name="fullname" required />
              <label htmlFor="Telephone"><b>Telephone</b></label>
              <input type="text" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="Telephone" required />
              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />
              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
              <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
              <label htmlFor="message"><b>Message </b></label>
              <input type="text" placeholder="Enter Message" name="message" required />
              <label>
                <input type="checkbox" defaultChecked="checked" name="acceptation" style={{marginBottom: '15px'}} />By creating an account you agree to our <a href="www" style={{color: 'dodgerblue'}}>Terms & Privacy</a> 
              </label>
              <div className="clearfix">
                <button type="reset" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn">Sign Up</button>
              </div>
              <Link to="/Login" className="signlink"> Login </Link>
            </div>
          </form>
        </div>
      </div>
      
    );
  }


export default SignUp
//export default function Mysignup() {


   