import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'


function AuthorizationHOC() {

//  const token = localStorage.


  return (
    <>
    <Outlet />
    </>
  )
}

export default AuthorizationHOC
