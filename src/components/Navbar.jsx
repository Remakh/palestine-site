import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FOPLogo } from '../assets'
const Navbar = () => {

  const buttons = 'bg-white rounded text-black'

  return (
    <div className='w-10/12 mx-auto sticky top-0 flex text-white justify-between overflow-visible'>
      <Link to='/'>
        <img src={FOPLogo} className=' w-[100px] my-auto p-3 rounded-full' />
      </Link>
      <nav className='flex justify-between '>
            <ul id='navbar' className='flex space-x-5 my-auto '>
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
                  isActive ? 'bg-white rounded text-black group' 
                  : "hoover:bg-white hoover:text-black group"
                  ) }>
              <Link to='/About' className=''>
                <li>About </li>
              </Link>
              <Link to='/About/Committee' className='hidden hover:bg-red-400 group-hover:block absolute bg-green-500 text-white rounded -translate-x-4'>
                <li>Committee</li>
              </Link>
              </NavLink>
              <NavLink
                to='/Events'
                className={( {isActive, isPending} ) => (
                  isActive ?buttons
                  : ""
                  )}>
              <Link to='/Events'>
                <li>Events </li>
              </Link>
              </NavLink>
              <NavLink
                to='/Learn'
                className={( {isActive, isPending} ) => (
                  isActive ? buttons
                  : ""
                  )}>
              <Link to='/Learn'>
                <li>Learn </li>
              </Link>
              </NavLink>
            </ul>
        </nav>
            <div>

            </div>
    </div>
  );
};

export default Navbar;