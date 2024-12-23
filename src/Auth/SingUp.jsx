import React ,{useState}from "react";
import './SignUp.css';
import { Link } from "react-router-dom";
import Navbar1 from "../NavBar/navbar1";


const SignUp = ({ onSignupSuccess })=>{
  const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  // Mock validation logic
  if (username && password) {
    // Simulate signup success
    onSignupSuccess();
  } else {
    alert("Please fill all fields for Sign-Up!");
  }
};

    return(
      <div className="main6">
        <div className="Nav">
      <Navbar1/> 
    </div>

        <div className="addUser">
            <h3>Sign Up</h3>
            <form className="addUserForm" onSubmit={handleSubmit}>
                <div className="inputGroup">
                <label htmlFor="name">User Name:</label>
                    <input type="text" id="name" autoComplete="off" placeholder="Enter your name" value={username}  onChange={(e) => setUsername(e.target.value)} required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" autoComplete="off" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button  type="submit" className="btn btn-success">Sign Up</button>
                </div>
            </form>
            <div className="login">
                <p>Already have an account</p>
            <Link to="/login" type="Submit" className="btn btn-primary">Login</Link>
            </div>
        </div>
        </div>
    )
}
export default SignUp;