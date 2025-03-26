import React from 'react'
import { logo } from '../assets'
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';
function Footr() {
  return (
    <section className='nav-bg text-white'>
      <div className='px-10 py-20'>
        <div className='flex md:flex-row flex-col justify-between items-start '>
          <div className='w-[130px] h-[60px] mb-10'>
            <Link to="/">{<img className='w-full h-full' src={logo} alt="logo" />}</Link>
          </div>
          <ul className='mb-10'>
            <li className='text-lg font-medium text-gray-400 mb-2'>
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li className='text-lg font-medium text-gray-400 mb-2'>
              <Link to="/about">Biz haqimizda</Link>
            </li>
            <li className='text-lg font-medium text-gray-400 mb-2'>
              <Link to="/prices">Bizning xizmatlar</Link>
            </li>
            <li className='text-lg font-medium text-gray-400 mb-2'>
              <Link to="/contact">Aloqa</Link>
            </li>
          </ul>
          <div>
            <p className='text-lg font-medium text-gray-400 mb-2'><Link to="/contact">Biz bilan bog'laning</Link></p>
            <p className='text-lg font-medium text-gray-400 mb-2'>Tel: +998 88 071-0317</p>
            <p className='text-lg font-medium text-gray-400 mb-2'>Email: avtofix@mail.com</p>
          </div>
        </div>
        <span className='w-[100%] h-[1px] bg-gray-500 inline-block '></span>

        <div className='flex justify-center items-center gap-5 sm:gap-10 mt-10'>
          <Link to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dru_RU">
            <span className='hover:bg-gray-500 w-[60px] h-[60px] rounded-full cursor-pointer bg-gray-600 flex justify-center items-center'>
              <Facebook />
            </span>
          </Link>
          <Link to="https://www.youtube.com/">
            <span className='hover:bg-gray-500 w-[60px] h-[60px] rounded-full cursor-pointer bg-gray-600 flex justify-center items-center'>
              <Youtube />
            </span>
          </Link>
          <Link to="https://x.com/i/flow/login">
            <span className='hover:bg-gray-500 w-[60px] h-[60px] rounded-full cursor-pointer bg-gray-600 flex justify-center items-center'>
              <Twitter />
            </span>
          </Link>
          <Link to="https://uz.linkedin.com/">
            <span className='hover:bg-gray-500 w-[60px] h-[60px] rounded-full cursor-pointer bg-gray-600 flex justify-center items-center'>
              <Linkedin />
            </span>
          </Link>
        </div>
      </div>
    </section>

  )
}

export default Footr