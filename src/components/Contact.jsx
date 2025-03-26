import React, { useState } from 'react'
import { email, location, oclock, phone } from '../assets'

function Contact() {
  const [maptoggle, setMapToggle] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const botToken = "8017008549:AAEIl6pyQPJ56mzGhQoPtBtxAPGUhyLhNeY";
  const chatId = "6539046942";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Yangi xabar!\n\n Ism: ${formData.text}\n\n Email: ${formData.email}\n\n Xabar: ${formData.message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        alert("Xabar yuborildi!");
        setFormData({ text: "", email: "", message: "" });
      } else {
        alert("Xabar yuborilmadi!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Xatolik ro'y berdi!");
    }
  };
  return (
    <section id='contact' className="bg-[#1E293B]  py-20 px-4 md:px-20 ">
      {/* title */}
      <div className='text-center'>
        <h1 className='font-bold text-2xl md:text-5xl text-[#FACC15] mb-4'>Biz bilan bog‘laning</h1>
      </div>
      <div className='flex items-center flex-col lg:flex-row justify-center my-20 gap-2'>
        <div className=' w-full md:w-[460px]'>
          <div className='flex justify-center gap-4'>
            <div className='rounded-lg p-4 bg-white w-[170px] h-[170px] text-center cursor-pointer hover:bg-gray-100 shadow-2xl  ' onClick={() => setMapToggle(!maptoggle)}>
              <a href="#">
                <img className='w-[60px] h-[60px] mx-auto mb-4' src={location} alt="location" />
                <h3>Qarshi sh. Mustaqillik shoh ko‘chasi 10</h3>
              </a>
            </div>
            <div className='rounded-lg p-4 bg-white w-[170px] h-[170px] text-center cursor-pointer hover:bg-gray-100 shadow-2xl'>
              <a href="tel:+998880710317">
                <img className='w-[80px] h-[60px] mx-auto mb-4' src={phone} alt="phone" />
                <h3>tel:+998 <br /> 88 071 03 17</h3>
              </a>
            </div>
          </div>
          <div className='flex gap-4 mt-4 justify-center'>
            <div className='rounded-lg p-4 bg-white w-[170px] h-[170px] text-center cursor-pointer hover:bg-gray-100 shadow-2xl'>
              <a href="#" >
                <img className='w-[60px] h-[60px] mx-auto mb-4' src={oclock} alt="oclock" />
                <h3>24/7 <br />09:00 - 21:00</h3>
              </a>
            </div>
            <div className='rounded-lg p-4 bg-white w-[170px] h-[170px] text-center cursor-pointer hover:bg-gray-100 shadow-2xl'>
              <a href="mailto:xurshid0317@gmail.com">
                <img className='w-[60px] h-[60px] mx-auto mb-4' src={email} alt="email" />
                <h3 className='underline text-blue-400'>avtofix@gmail.com</h3>
              </a>
            </div>
          </div>
        </div>
        <div className='bg-blue-500 py-10 px-10 mt-10 lg:mt-0   w-[100%] sm:w-[50%] h-[400px] rounded-lg'>
          <form onSubmit={handleSubmit}>
            <input
              required
              autoComplete="off"
              name='text'
              value={formData.text}
              onChange={handleChange}
              className='w-full py-2 px-4 bg-white outline rounded-lg mb-4'
              type="text"
              placeholder='Ismingizni kiriting ' /><br />
            <input
              required
              autoComplete="off"
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full py-2 px-4 bg-white outline rounded-lg mb-4'
              type="email"
              placeholder='Email manzilingizni kiriting' /><br />
            <textarea
              required
              autoComplete="off"
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full h-[140px] py-2 px-4 bg-white outline rounded-lg mb-4'></textarea>
            <button
              type='submit'
              className='border-2 border-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600'>Yuborish</button>
          </form>
        </div>
      </div>
      {/* map */}
      {maptoggle && <div className='relative w-full max-w-[1000px] h-auto mx-auto'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.952229484166!2d65.80621369467403!3d38.834453697318395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea8629448dea1%3A0x671e501f0da71037!2z0JjQvdC20LXQvdC10YDQvdC-IC0g0Y3QutC-0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgg!5e0!3m2!1sru!2s!4v1742811733302!5m2!1sru!2s"
          className='w-full h-[400px] sm:h-[500px] md:h-[600px] border-0'
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h2 className='absolute top-[-60px] right-[10px] font-bold text-5xl text-red-500 cursor-pointer' onClick={() => setMapToggle(!maptoggle)}>X</h2>
      </div>}
    </section>
  )
}

export default Contact