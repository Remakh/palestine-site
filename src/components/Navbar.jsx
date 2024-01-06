import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { logo2 } from '../assets'
const Navbar = () => {
  return (
    <div className='w-10/12 mx-auto sticky top-0'>
      <nav className='flex justify-between sticky top-0'>
          <div className='w-20 h-20 flex my-2'>
                <img src={logo2} className='rounded-full h-[75px] w-[75px] my-auto' />
            </div>
            <ul id='navbar' className='flex flex-row space-x-5 font-poppins my-auto'>
              <NavLink
                to='/'
                className={( {isActive, isPending} ) => (
                  isActive ? "bg-green-500 rounded" 
                  : ""
                  )}>
              <Link to='/'>
                <li>Home </li>
              </Link>
              </NavLink>
              <NavLink
                to='/About'
                className={( {isActive, isPending} ) => (
                  isActive ? "bg-green-500 rounded" 
                  : ""
                  )}>
              <Link to='/About'>
                <li>About </li>
              </Link>
              </NavLink>
              <NavLink
                to='/Events'
                className={( {isActive, isPending} ) => (
                  isActive ? "bg-green-500 rounded" 
                  : ""
                  )}>
              <Link to='/Events'>
                <li>Events </li>
              </Link>
              </NavLink>
              <NavLink
                to='/Learn'
                className={( {isActive, isPending} ) => (
                  isActive ? "bg-green-500 rounded" 
                  : ""
                  )}>
              <Link to='/Learn'>
                <li>Learn </li>
              </Link>
              </NavLink>
            </ul>
            <div>

            </div>
        </nav>
    </div>
  );
};

export default Navbar;