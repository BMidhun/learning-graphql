import { ReactNode, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import jwtDecode from "jwt-decode";


function AuthorizationHOC() {


const navigate = useNavigate();

const [sessionTime, setSessionTime] = useState(0);

useEffect(() => {

  const token = localStorage.getItem("token");

  let timer: string | number | NodeJS.Timeout | undefined;


  if(token) {
    const payload: { userId: string; iat: number; exp: number } =
    jwtDecode(token);

    

    timer = setInterval(() => {
      setSessionTime(payload.exp * 1000 - Date.now())
        if(Date.now() > payload.exp * 1000 ) {
          localStorage.removeItem("token");
          navigate("/auth/login");
          clearInterval(timer);
        }
    },0)
  }

  return () => {
     clearInterval(timer);
  }


}, []);

  return (
    <>
    <div>{new Date(sessionTime).toISOString().slice(11,19)}</div>
    <Outlet />
    </>
  )
}

export default AuthorizationHOC
