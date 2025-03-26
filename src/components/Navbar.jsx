import React, { useState } from 'react';
import { navLink } from '../utils/constanta';
import { close, logo, menu } from '../assets';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex z-[999]   justify-between items-center nav-bg px-10 py-4  top-0 left-0 text-white ">
      {/* Logo */}
      <div className="w-[130px] h-[60px]">
        <Link to="/"><img className="w-full h-full" src={logo} alt="logo" /></Link>
      </div>

      {/* Desktop nav */}
      <ul className="hidden lg:flex justify-between ">
        {navLink.map((item, idx) => (
          <li
            className={`${navLink.length - 1 === idx ? "mr-0" : "mr-16"
              }`}
            key={idx}
          >
            <NavLink className="font-semibold md:text-[14px] lg:text-xl  nav-link" to={`/${item.id}`}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='flex items-center gap-4'>
        {/* log in  */}
        <Link to="login">
          <button className='block py-2 px-4 text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700'>Log in</button>
        </Link>
        {/* Mobile menu button */}
        <div
          className="w-[30px] h-[30px] lg:hidden block cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <img src={toggle ? close : menu} alt="menu" />
        </div>
        {/* Mobile menu */}
        <ul
          className={` z-[999] absolute top-20 left-0 w-full bg-gray-800  text-white flex flex-col items-center md:hidden transition-all duration-300 ease-in-out
          ${toggle ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}
        >
          {navLink.map((item, idx) => (
            <li className="py-2 w-full text-center border-b border-gray-700 " key={idx}>
              <Link className="font-semibold block py-2 w-full" to={`/${item.id}`} onClick={() => setToggle(false)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>


    </nav>
  );
}

export default Navbar;
