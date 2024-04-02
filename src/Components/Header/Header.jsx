import React, { useState } from 'react'
import CycloneIcon from '@mui/icons-material/Cyclone';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    let Links =[
      {name:"Dashboard",link:"/"},
      {name:"Transaction",link:"/transection"},
      {name:"Income",link:"/incomes"},
      {name:"Expenses",link:"/expenses"},
      {name:"About",link:"/aboutus"},
      {name:"Contact",link:"/conactus"},
      
    ];
    let [open,setOpen]=useState(false);
    const [clickedIndex, setClickedIndex] = useState(null);
    
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7 bg-[#ADBC9F]'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <CycloneIcon sx={{
          display : "flex",
          alignItems : "center",
          justifyContent : "center",
          mt : "-4px",
        }}/>
        </span>
        TRACKER
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <DoubleArrowIcon sx={{
          display : "flex",
          alignItems : "center",
          justifyContent : "center",
          mt : "-4px",
        }} name={open ? 'close':'menu'}></DoubleArrowIcon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'} bg-[#ADBC9F]`}>

      {Links.map((link, index) => (
                        <li key={link.name} className={`md:ml-8 text-xl md:my-0 my-7 rounded-lg hover:border-gray-800 ${index === clickedIndex ? 'border-2 border-gray-800' : 'border-transparent'}`}>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500 font-bold bg-[#436850] rounded-lg px-4 py-2 inline-block' onClick={() => setClickedIndex(index)}>{link.name}</a>
                        </li>
                    ))}
         <div>
        <a href="Login">
        <AccountCircleIcon sx={{
          display : "flex",
          alignItems : "center",
          justifyContent : "center",
          mt : "-2px",
          marginLeft:"20px",
        }}/>

        </a>
        

        
        </div> 
      </ul>
      </div>
    </div>
  )
}

export default Header
