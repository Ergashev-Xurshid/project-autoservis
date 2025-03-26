import React from 'react'
import { avtoBg, img_1, img_2, img_3, img_4, img_5, img_6 } from '../assets'

function About() {
  return (
    <section id='about' className=" bg-gray-100 py-10 px-4 lg:px-20 ">
      {/* title */}
      <div className='text-center'>
        <h1 className='font-bold text-3xl md:text-5xl text-[#FACC15] mb-4'>Biz haqimizda</h1>
      </div>
      {/* hero */}
      <div className='flex lg:flex-row flex-col my-20 justify-center lg:justify-between items-start gap-5'>
        <div className=' flex-1 lg:max-w-[35%]  xl:max-w-[40%]'>
          <h2 className='font-bold text-xl md:text-4xl leading-10  mb-5'><span className='text-blue-800'>Auto</span><span className='text-[#FACC15]'>Fix</span> – Ishonchli Avtoservisingiz!</h2>
          <p className='text-lg text-gray-600'>2008-yilda tashkil etilgan AutoFix – avtomobillaringiz uchun sifatli va tezkor ta’mirlash xizmatlarini taqdim etuvchi yetakchi avtoservisdir. Bizning asosiy maqsadimiz – mijozlarga eng yuqori sifatli xizmat ko‘rsatish va ularning xavfsizligini ta’minlash.</p>
          <br />
          <h2 className='text-[#FACC15] font-bold text-2xl'>Nega aynan biz?</h2>
          <p className='font-medium text-xl text-gray-500 my-2 '>🔹<span className='font-bold text-black'>17 yillik</span> tajriba</p>
          <p className='font-medium text-xl text-gray-500 my-2 '>🔹<span className='font-bold text-black'>1000+</span> doimiy mijozlar</p>
          <p className='font-medium text-xl text-gray-500 my-2 '>🔹Faqat <span className='font-bold text-black'>sertifikatlangan</span> ehtiyot qismlar</p>
          <p className='font-medium text-xl text-gray-500 my-2 '>🔹<span className='font-bold text-black'>6 oylik</span> kafolat bilan ta’mirlash</p>
          <p className='font-medium text-xl text-gray-500 my-2 '>🔹<span className='font-bold text-black'>Zamonaviy</span> diagnostika va jihozlar</p>        </div>
        <div className='flex-1/2 lg:max-w-[60%]'>
          <img src={avtoBg} className='w-full rounded-xl h-auto' alt="avto" />
        </div>
      </div>
      {/* jamo azolari */}
      <div className='pt-20'>
        <h2 className='font-bold text-3xl md:text-5xl text-[#FACC15] mb-10 '>Jamoamiz :</h2>
        <div className='flex flex-wrap justify-center gap-10'>
          <div className='bg-blue-950 about-card border max-w-[600px] p-5 rounded-lg cursor-pointer shadow-xl hover:bg-blue-900 '>
            <div className='mb-5'>
              <img src={img_1} />
            </div>
            <div>
              <h3 className='font-bold text-2xl mb-4 text-white'>Botir Yo'ldoshev – <span className='text-[#FACC15]'>Bosh mexanik</span></h3>
              <p className='text-gray-200 font-medium'>10+ yillik tajribaga ega. Avtomobil motorlarini ta’mirlash va diagnostika bo‘yicha mutaxassis.</p>
            </div>
          </div>
          <div className='bg-blue-950 about-card border w-[600px] p-5 rounded-lg cursor-pointer shadow-xl hover:bg-blue-900'>
            <div className='mb-5'>
              <img src={img_2} />
            </div>
            <div>
              <h3 className='font-bold text-2xl mb-4 text-white'>Shaxzod Valiyev  – <span className='text-[#FACC15]'>Bo‘yoqchi</span></h3>
              <p className='text-gray-200 font-medium'>Germaniya texnologiyalaridan foydalangan holda avtomobil bo‘yash bo‘yicha professional.</p>
            </div>
          </div>
          <div className='bg-blue-950 about-card border w-[600px] p-5 rounded-lg cursor-pointer shadow-xl hover:bg-blue-900'>
            <div className='mb-5'>
              <img src={img_3} />
            </div>
            <div>
              <h3 className='font-bold text-2xl mb-4 text-white'>Javohir Xudoyberdiyev – <span className='text-[#FACC15]'>Elektrik ustas</span></h3>
              <p className='text-gray-200 font-medium'>Zamonaviy elektroavtomobillar va sensorli tizimlar bilan ishlash bo‘yicha ekspert.</p>
            </div>
          </div>
          <div className='bg-blue-950 about-card border w-[600px] p-5 rounded-lg cursor-pointer shadow-xl hover:bg-blue-900'>
            <div className='mb-5'>
              <img src={img_4} />
            </div>
            <div>
              <h3 className='font-bold text-2xl mb-4 text-white'>Michael Thompson – <span className='text-[#FACC15]'>Diagnostika bo‘yicha mutaxassis</span></h3>
              <p className='text-gray-200 font-medium'>Kompyuter diagnostikasi va avtomobillarning elektron boshqaruv tizimlari bo‘yicha 8 yillik tajribaga ega. Zamonaviy skanerlash usullari orqali muammolarni tez va aniq aniqlaydi.</p>
            </div>
          </div>
          <div className='bg-blue-950 about-card border w-[600px] p-5 rounded-lg cursor-pointer shadow-xl hover:bg-blue-900'>
            <div className='mb-5'>
              <img src={img_5} />
            </div>
            <div>
              <h3 className='font-bold text-2xl mb-4 text-white'>David Anderson– <span className='text-[#FACC15]'>Transmissiya ustasi</span></h3>
              <p className='text-gray-200 font-medium'>Avtomobillarning uzatmalar qutisi (korobka) va differensial tizimlarini ta’mirlash bo‘yicha 9 yillik tajribaga ega. Avtomatik va mexanik transmissiyalarni mukammal biladi.</p>
            </div>
          </div>
          <div className='bg-blue-950 about-card border w-[600px] p-5 rounded-lg cursor-pointer shadow-xl hover:bg-blue-900'>
            <div className='mb-5'>
              <img src={img_6} />
            </div>
            <div>
              <h3 className='font-bold text-2xl mb-4 text-white'>James Carter – <span className='text-[#FACC15]'>Shassi va balansirovka ustasi</span></h3>
              <p className='text-gray-200 font-medium'>Rul boshqaruvi, tormoz tizimi va avtomobilning umumiy balansi bo‘yicha mutaxassis. 7 yildan buyon avtomobillarni harakatdagi barqarorligini oshirish ustida ishlaydi.</p>
            </div>
          </div>
        </div>
      </div>
      {/* sharxlar */}
      <div className='my-20'>
        <h2 className='font-bold text-3xl md:text-5xl text-[#FACC15] mb-10 '>Mijozlar fikri</h2>
      <div className='flex gap-4  flex-wrap justify-center'>
        <div className='bg-white p-5 rounded-3xl shadow-2xl w-[300px] transition-transform delay-30 ease-in hover:scale-[1.05] cursor-pointer'>
          <h2 className='text-[#007bff] font-medium mb-2'>💬 Otabek Qodirov</h2>
          <p className='text-[#333]'>"Xizmat darajasi juda yuqori! Mashinamni tez va sifatli ta’mirlab berishdi. Rahmat"</p>
        </div>
        <div className='bg-white p-5 rounded-3xl shadow-2xl w-[300px] transition-transform delay-30 ease-in hover:scale-[1.05] cursor-pointer'>
          <h2 className='text-[#007bff] font-medium mb-2'>💬 Dilnoza Rahimova</h2>
          <p className='text-[#333]'>"Mijozlarga e’tibor va sifatli xizmat ko‘rsatish AutoFix’da eng zo‘ri! Hamisha shu yerga kelaman."</p>
        </div>
        <div className='bg-white p-5 rounded-3xl shadow-2xl w-[300px] transition-transform delay-30 ease-in hover:scale-[1.05] cursor-pointer'>
          <h2 className='text-[#007bff] font-medium mb-2'>💬 Jamshid Abdullayev</h2>
          <p className='text-[#333]'> "Men uchun eng muhim narsa – ishonchlilik! AutoFix bu borada eng yaxshi tanlov!"</p>
        </div>
        <div className='bg-white p-5 rounded-3xl shadow-2xl w-[300px] transition-transform delay-30 ease-in hover:scale-[1.05] cursor-pointer'>
          <h2 className='text-[#007bff] font-medium mb-2'>💬 Gulnoza Hamidova</h2>
          <p className='text-[#333]'>"Shunchalik tez va sifatli xizmat olishni kutmagandim! Rahmat sizlarga, AutoFix jamoasi!"</p>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default About