import React, { useEffect, useState } from 'react';
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom'
import { FOPLogo, title } from '../assets'
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { FaSortDown } from "react-icons/fa";
const Navbar = () => {
  useEffect(() => {
    setOpen(false)
  }, []
  )
  const buttons = 'bg-white rounded text-black' 
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  console.log(aboutOpen)

  return (
    <div className='w-11/12 '>
      <div className='w-11/12 mx-auto sticky top-0 md:flex text-white overflow-visible justify-between hidden'>
      <div className='flex'>
        <Link to='/'>
          <img src={FOPLogo} className=' w-[100px] my-auto p-3 rounded-full'/>
        </Link>
        {/* <Link to='/' className='my-auto'>
          <img src={title} className=' w-[300px] my-auto p-3 rounded-full'/>    
          </Link>     */}
      </div>
      <nav className='flex flex-grow-1 text-lg align-middle'>
            <ul id='navbar' className='flex space-x-10 my-auto '>           
              <Link to='/'>
                <li>Home </li>
              </Link>
              {/* <NavLink
                to='/About'
                className={( {isActive, isPending} ) => (
                  isPending ? 'hoover:bg-white hoover:text-black' : 
                  isActive ? 'bg-white rounded text-black group' 
                  : "hoover:bg-white hoover:text-black group"
                ) }> */}
              <Link to='/About' className='group hover:text-green-300'>
                <li>About 🔻</li>
                <Link to='/Statements'>
                  <li className='invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 absolute bg-white text-black transition-opacity ease-in-out duration-500 hover:bg-green-400 hover:text-black '>Statements</li>
                </Link>
              </Link>
              {/* </NavLink> */}
              {/* <NavLink
                to='/Committee'
                className={( {isActive, isPending} ) => (
                  isPending ? 'hoover:bg-white hoover:text-black' : 
                  isActive ? 'bg-white rounded text-black group' 
                  : "hoover:bg-white hoover:text-black group"
                ) }> */}
              <Link to='/Committee' className=''>
                <li>Committee </li>
              </Link>
              {/* </NavLink> */}
              {/* <NavLink
                to='/Events'
                className={( {isActive, isPending} ) => (
                  isActive ? buttons
                  : ""
                )}> */}
              <Link to='/Events'>
                <li>Events </li>
              </Link>
              {/* </NavLink> */}
              {/* <NavLink
                to='/Statements'
                className={( {isActive, isPending} ) => (
                  isActive ? buttons
                  : ""
                )}> */}
              {/* </NavLink> */}
            </ul>
        {/* <div className='flex space-x-10'>
            <a href='https://manchesterstudentsunion.com/shop/product/7425-' target='_blank' className='bg-gold  px-2 py-2 my-auto  text-black rounded-lg text-nowrap '>
            <p className='hover:underline text-lg'>Become a Member</p>
            </a>
          </div> */}
        </nav>
          </div>
          <div className='flex md:hidden justify-between'>
          <nav className='flex flex-grow-1 text-lg align-middle flex-col '>
            <div className='pt-10 pl-10'>
            <IoIosMenu className={`my-auto ${open ? 'hidden' : ''} cursor-pointer`} color='white' size='20' onClick={() => setOpen(!open)}/>
            <IoClose className={`my-auto ${open ? '' : 'hidden'} cursor-pointer`} color='white' size='20' onClick={() => setOpen(!open)}/>
            </div>
            <ul id='navbar' className={`pt-5  my-auto pl-10 pb-3  ${open ? 'block' : 'hidden'}`}>
              <Link to='/'>
                <li className='text-white'>Home </li>
              </Link>
              <div className='flex'>
              <Link to='/About' className='text-white hover:text-green-300'>
                <li>About</li> 
              </Link>
              <FaSortDown color='red' onClick={() => setAboutOpen(!aboutOpen)} className='my-auto cursor-pointer'/>
              </div>
              <Link to='/Statements'>
                <li className={`text-white ${aboutOpen ? 'opacity-100 visible block' : 'opacity-0 invisible absolute'} transition-opacity ease-in-out duration-700 hover:bg-green-400 hover:text-black `}>Statements</li>
              </Link>
              <Link to='/Committee' className=''>
                <li className='text-white'>Committee </li>
              </Link>
              <Link to='/Events'>
                <li className='text-white'>Events </li>
              </Link>
            </ul>
          </nav>
          <div className='flex'>
            <Link to='/'>
              <img src={FOPLogo} className=' w-[100px] my-auto p-3 rounded-full'/>
            </Link>
          </div>

        </div>
      </div>
  );
};

export default Navbar;