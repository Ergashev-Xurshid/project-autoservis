import React, { useEffect, useState } from 'react'
import { textArray } from '../utils/constanta';
import { Link, Outlet } from 'react-router-dom';
function Home() {

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];

    if (!isDeleting && charIndex < currentText.length) {
      setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % textArray.length);
    }
  }, [charIndex, isDeleting, index]);

  return (
    <section id='Home' className=' home-bg w-full h-[100vh]'>
      <div className='mask '>
        <div className='z-10'>
          <div className='px-4 md:px-20'>
            <div className='mt-[160px] mr-auto home-card  p-5 md:h-[300px] md:w-[700px] rounded-lg'>
              <h1 className='text-white  font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 home-title'>AutoFix - <span className='typing'>{text}</span><span>|</span></h1>
            </div>
            <div className='mt-4 flex flex-col md:flex-row'>
              <Link to="/prices">
                <button className='text-xl cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300'>Xizmatlarimizni Ko‘rish</button>
              </Link>
              <Link to="/contact">
                <button className=' text-xl cursor-pointer bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full  mt-4 md:mt-0  ml-0 md:ml-4 transition-all duration-300'>Biz bilan bog‘lanish</button>
              </Link>
            </div>
          </div>
          <div>
          </div>
        </div>
        
      </div>


    </section>
  )
}

export default Home