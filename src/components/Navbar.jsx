import React, { useState } from 'react';
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom'
import { FOPLogo, title } from '../assets'
import { useAuth } from '../hooks/useAuth';
import { logoutCall } from '../apiUtils';
const Navbar = () => {

  const buttons = 'bg-white rounded text-black'
  const { isAuthenticated, logout, authToken } = useAuth()

  const handleLogout = async () => {
    const config = {
      headers : {
        'Authorization': `Token ${authToken}`
      }
    }
    const response = await logout(config)
    return redirect('/')
  }  
  
  return (
    <div className='w-11/12 mx-auto sticky top-0 flex text-white overflow-visible justify-between'>
      <div className='flex'>
        <Link to='/'>
          <img src={FOPLogo} className=' w-[100px] my-auto p-3 rounded-full'/>
        </Link>
        <Link to='/' className='my-auto'>
          <img src={title} className=' w-[300px] my-auto p-3 rounded-full'/>    
          </Link>    
      </div>
      <nav className='flex flex-grow-1 text-lg align-middle'>
            <ul id='navbar' className='flex space-x-10 my-auto '>
              <NavLink
                to='/'
                className={( {isActive, isPending} ) => (
                  isActive ? buttons 
                  : ""
                  )}>
              <Link to='/'>
                <li>Home </li>
              </Link>
              </NavLink>
              <NavLink
                to='/About'
                className={( {isActive, isPending} ) => (
                  isPending ? 'hoover:bg-white hoover:text-black' : 
                  isActive ? 'bg-red-500 rounded text-black group' 
                  : "hoover:bg-white hoover:text-black group"
                  ) }>
              <Link to='/About' className=''>
                <li>About </li>
              </Link>
              </NavLink>
              <NavLink
                to='/Committee'
                className={( {isActive, isPending} ) => (
                  isPending ? 'hoover:bg-white hoover:text-black' : 
                  isActive ? 'bg-green-500 rounded text-black group' 
                  : "hoover:bg-white hoover:text-black group"
                  ) }>
              <Link to='/Committee' className=''>
                <li>Committee </li>
              </Link>
              </NavLink>
              <NavLink
                to='/Events'
                className={( {isActive, isPending} ) => (
                  isActive ? buttons
                  : ""
                  )}>
              <Link to='/Events'>
                <li>Events </li>
              </Link>
              </NavLink>
              <NavLink
                to='/Statements'
                className={( {isActive, isPending} ) => (
                  isActive ? buttons
                  : ""
                  )}>
              <Link to='/Statements'>
                <li>Statements</li>
              </Link>
              </NavLink>
            </ul>
        </nav>
        <div className='flex space-x-10'>
            <a href='https://manchesterstudentsunion.com/shop/product/7425-' target='_blank' className='my-auto  text-white rounded-lg text-nowrap '>
                {isAuthenticated ? '' : <p className='hover:underline text-lg'>Join the Society</p>}
            </a>
            { isAuthenticated 
                ? 
                <button onClick={handleLogout} type='button'>Logout</button>
                :
              <Link to='/Login' className='my-auto  hover:underline text-white rounded-lg text-nowrap '>
                  <p className=' text-lg'>Admin Login</p>
              </Link> 

            }
        </div>
      </div>
  );
};

export default Navbar;