import './index.css';
import React,  { useState, useEffect } from 'react';
// import axios from "axios";


const ShowProfile = () =>{

  const data = localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : {}
  
  const [userInfo, setuserInfo] = useState(data)

  console.log(data, "data")

  // 1st useEffect
  useEffect(() => {
    const data = localStorage.getItem('loginData')
    if(data){
      setuserInfo(JSON.parse(data))
    }
  }, [userInfo])

  

  
    let content;
  
        if(typeof userInfo === "object"){
    
          content = userInfo.map((item,i) => {

            return(
              <div key={i}>
                <h2>USER PROFILE</h2>
                <h1 className='style1'>{item.name}</h1>
                <h1 className='style1'>{item.email}</h1>
                <h1 className='style1'>{item.password}</h1>   
              </div>
            );
          });
          
        } else {
              content = <h1>{userInfo}</h1>
        } 

        return(
          <div>
            {content}
          </div>
        )
     
};

export default ShowProfile
