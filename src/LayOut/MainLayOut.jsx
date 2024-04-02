import Header from "../Components/Header/Header"
import { Outlet } from "react-router-dom"

const MainLayOut = () => {
  return (
   <div className="overflow-hidden w-screen h-screen" >
    <Header/>
    <Outlet/>
    
   </div>
  )
}

export default MainLayOut
