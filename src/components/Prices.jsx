import React from 'react'
import { faq, priceArry, pricesCard } from '../utils/constanta'
import { telegram } from '../assets'

function Prices() {
  return (
    <section id='prices' className='bg-[#1E293B]  py-20 px-10 sm:px-20'>
      {/* title */}
      <div className='text-center'>
        <h1 className='font-bold text-2xl md:text-5xl text-[#FACC15] mb-4'>Sifatli xizmat - Adolatli narx!</h1>
        <p className='font-bold text-[14px] md:text-xl text-[#D1D5DB]'>Eng yaxshi xizmatlarni hamyonbop narxlarda taqdim etamiz!</p>
      </div>
      {/* narxlar jadvali */}
      <table className='w-full border-collapse border border-gray-600  shadow-lg my-10'>
        <thead>
          <tr className="bg-gray-700 text-white text-lg">
            <th className="p-4 border border-gray-600 text-center">Xizmat nomi</th>
            <th className="p-4 border border-gray-600 text-center">Narxi</th>
          </tr>
        </thead>
        <tbody>
          {priceArry.map((item, i) => (
            <tr key={i} className={`${i % 2 === 0 ? "bg-gray-800 " : "bg-gray-900"} text-white cursor-pointer hover:bg-gray-700`}>
              <td className="p-4 border border-gray-600 "><a className='hover:underline hover:text-blue-500 ' href="#">{item[0]}</a></td>
              <td className="p-4 border border-gray-600 text-center">{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* cards */}
      <div className='mt-20'>
        <h2 className='text-2xl md:text-5xl text-white font-bold my-20'>Xizmat to‘plamlari. <span className='text-yellow-500'>Paketlar</span></h2>
        <div className="flex justify-center lg:justify-between gap-8 h-full flex-col lg:flex-row ">
          {pricesCard.map((item, i) => (
            <div
              key={item.id}
              className={`flex flex-col  fle-1/2 cursor-pointer  rounded-lg text-white shadow-lg hover:scale-105 transition-transform 
                 lg:w-1/3   bg-card`}
            >
              <div className={`flex items-center gap-4 h-[80px] px-2 rounded-lg shadow-lg 
                ${i == 0 ? "standard-card" :"" }
                ${i == 1 ? "premium-card" :"" }
                ${i == 2 ? "vip-card" :"" }
                `}>
                <h2 className="text-2xl flex-1/3 font-extrabold ">{item.title}</h2>
                <span className=" card-price md:flex-1 lg:flex-1/2 bg-black px-2 py-1 rounded-lg text-center font-semibold">{item.price}</span>
              </div>
              <ul className="my-4 space-y-2 p-4 h-[400px] ">
                {item.xizmatlar.map((j, idx) => (
                  <li key={idx} className="text-gray-400 pb-2">{j}</li>
                ))}
              </ul>
              <a href="#" className=' mb-10 mx-auto'>
              <button className={`p-2 rounded-lg shadow-lg font-bold cursor-pointer
                ${i == 0 ? "standard-card" :"" }
                ${i == 1 ? "premium-card" :"" }
                ${i == 2 ? "vip-card" :"" }
                `}>Sotib Olish</button>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Faq */}
      <div className='mt-20'>
        <h2 className='text-2xl md:text-5xl text-white font-bold mb-10'>Sizni qiziqtirgan savollar – <span className='text-yellow-500'>FAQ</span></h2>
        {faq.map((item,i)=>(
          <div key={item.id} className='bg-gray-500 text-white border-2 border-gray-900 mb-10 rounded-lg'>
            <h2 className='p-5 bg-gray-900 text-2xl font-medium cursor-pointer'>{item.savol}</h2>
            <div className='p-5 '>
                <p>{item.javob}</p>
            </div>
          </div>
        ))}
        <a href="https://t.me/xurshid0317">
        <button className=' hover:bg-blue-700 p-4 bg-blue-600 cursor-pointer text-white rounded-lg font-medium text-lg md:text-xl flex items-center gap-2'>
          <img src={telegram} alt="telegram" className=' w-10 h-10' />
          Sizga yordam berishimiz uchun bog‘laning
        </button>
        </a>
      </div>
    </section>
  )
}

export default Prices