import React from 'react';
import Login from './Login';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import SignUp from './SignUp';
import ShowProfile from './showProfile';




function App() {
  return (
    <div >
      
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SignUp />}/>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/showProfile" element={<ShowProfile />}></Route>
        
      </Routes>
    </BrowserRouter>  

    

    </div>
  );
}

export default App;
