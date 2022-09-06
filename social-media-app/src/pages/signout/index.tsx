import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function SignOut() {

 const navigate = useNavigate();

 useEffect(() => {
   const token = localStorage.getItem("token");
   if(token) {
        localStorage.removeItem("token");
        navigate("/auth", {replace:true});
   }
 },[navigate])

  return (
    <div>
       User logging out....
    </div>
  )
}

export default SignOut
