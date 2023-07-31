import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Login = () => {
    
    // Creating state for login
    const [login, setstatelogin] = useState({

        name: "",
        password:""
    });

    const [userData , setstateuserData] = useState([])

    
    // create function for submitting password data into local storage
    // for future use and retrieval. 
    const functionSubmit = () => {
    
        axios.post("http://localhost:3000/pasroute", login)
        .then(response =>{
            localStorage.setItem("loginData", JSON.stringify(response.data))
            console.log(response)
        })};

        

    // Creating a function for changing the data
    const functionChange = (e) => {
            
            setstatelogin({
                ...login,   
                [e.target.name]: e.target.value
            })
    };

    


    return(
        <div>
            <h1>Login</h1>
            <input type="text" name="name" onChange={functionChange} placeholder="name"/>
            <input type="text" name="password" onChange={functionChange} placeholder="password"/>

            <Link to='/ShowProfile'>
                <button onClick={functionSubmit} >Submit</button>
            </Link>

        </div>
    );
};

export default Login