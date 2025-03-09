import React from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-3'>
          <div className="navbar bg-base-100 flex justify-between items-center">
            <div>

            </div>
  <div className="">
    <ul className="menu menu-horizontal px-1 text-lg text-gray-500">
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/career'}>Career</Link></li>
      <li><Link to={'/about'}>About</Link></li>
    
    </ul>
  </div>
  <div className='flex items-center gap-4' >
    <FaCircleUser className='text-3xl'></FaCircleUser>
    <a className="btn text-white bg-gray-800">Login</a>
  </div>
</div> 
        </div>
    );
};

export default Navbar;