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
      <nav className='flex justify-between  text-lg'>
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
                  isActive ? 'bg-white rounded text-black group' 
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
                  isActive ? 'bg-white rounded text-black group' 
                  : "hoover:bg-white hoover:text-black group"
                  ) }>
              <Link to='/Committee' className=''>
                <li>Committee </li>
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
            <div>
            <Link to='/'>
                <p>Join Us!</p>
              </Link>
            </div>
    </div>
  );
};

export default Navbar;