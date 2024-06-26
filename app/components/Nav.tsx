'use client'
import Link from 'next/link';
import React, { FC, useState } from 'react'
import NavItems from '../utils/NavItems';
import ThemeSwitcher from '../utils/ThemeSwitcher';
import { MdMenu } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
}

const Nav: FC<Props> = ({activeItem,setOpen}) => {
  const [active, setActive] = useState<boolean>(false)
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  if(typeof window !== 'undefined'){
    window.addEventListener("scroll", () =>{
      if(window.scrollY > 85){
        setActive(true);
      }
      else{
        setActive(false)
      }
    })
  }

  const handleSidebarClose = (event: any ) =>{
    if(event.target.id === "screen"){
     { setOpenSidebar(false)}
    }
  }

  return (
    <div className='w-full relative'>
      <div className={`${active ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black  fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500" 
                                 : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"}`}>
      
       <div className='w-[95%] 800px:w-[92%] m-auto py-2 h-full'>
        <div className="w-full h-[80px] flex items-center justify-between p-3">
          <div>
            <Link href={"/"} 
            className='text-[25px] font-Poppins font-[500] text-black dark:text-white'
            >
              Learning
            </Link>
          </div>
          <div className='flex items-center'>
            <NavItems 
            activeItem={activeItem}
            isMobile = {false}
            />
            
            <ThemeSwitcher />

            {/* for mobile */}
            <div className='800px:hidden border dark:border-white border-black rounded '>
              
            <MdMenu
            size={25}
            className='  cursor-pointer dark:text-white text-black'
            onClick={() =>{setOpenSidebar(true)}} 
            />
            </div>
            <FaRegUserCircle
            className=' dark:text-white text-black cursor-pointer'
            size={25}
            onClick={() => {setOpen(true)}}
            id="screen"
            />
          </div>

        </div>

       </div>

       {/* sidebar */}
       {  openSidebar && (
       <div 
       className='fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]'
       onClick={handleSidebarClose}
       >
        <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
          <NavItems 
          activeItem={activeItem}
          isMobile={true}
          />
          {/* user icon */}
          <FaRegUserCircle
            className='ml-5 my-2 dark:text-white text-black cursor-pointer'
            size={25}
            onClick={() => {setOpen(true)}}
            id="screen"
            />

            <br />
            <br />

            <p>By Learn dfdfffff</p>

             </div>


          </div>
        )}
      </div>
    </div>
  )
}

export default Nav;

