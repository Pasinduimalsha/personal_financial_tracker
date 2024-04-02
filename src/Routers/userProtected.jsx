import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const userProtected = () => {
 
  const user = false;
  return user? <Outlet/> : <Navigate to="/Login"/>
}

export default userProtected;