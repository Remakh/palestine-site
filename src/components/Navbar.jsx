import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FOPLogo } from '../assets'
const Navbar = () => {

  const buttons = 'bg-white rounded text-black'

  return (
    <div className='w-10/12 mx-auto sticky top-0 flex text-white justify-between'>
      <Link to='/'>
        <img src={FOPLogo} className=' w-[100px] my-auto p-3 rounded-full' />
      </Link>
      <nav className='flex justify-between sticky top-0'>
            <ul id='navbar' className='flex flex-row space-x-5 font-poppins my-auto'>
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
                  isActive ? buttons 
                  : ""
                  )}>
              <Link to='/About'>
                <li>About </li>
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