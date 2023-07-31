import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const SignUp = () => {

    // creating the sate for signup
    const [signUp, setSignUp] = useState({
        name:"",
        email:"",
        password:""

    });
        

    // creating the function for sending data via axios to server.
    const handleSubmit = () => {
        
        console.log("clicked");

        axios.post("http://localhost:3000/data", signUp)
        .then(response => {
        localStorage.setItem("signUpData", JSON.stringify(response.data))
        })
    };
    
    
    // creating the function for updating the state.
    const handleChange = (e) => {

        console.log(e.target.value, "changed");
        console.log(e.target.name, "name");

        setSignUp(
            {
                ...signUp,
                [e.target.name]: e.target.value
            }
        )
    };


    return(
        <div>
            <h1>Sign Up</h1>
            <input type="text" name="name" placeholder="name" onChange={handleChange} />
            <input type="text" name="email" placeholder="email" onChange={handleChange} />
            <input type="text" name="password" placeholder="password" onChange={handleChange}/>


            {/* Creating the submit button * and linking the login page with it*/}

            <Link to="/login">
                
                <button onClick={handleSubmit}>Submit</button>

            </Link>


        </div>
    );

};

export default SignUp


