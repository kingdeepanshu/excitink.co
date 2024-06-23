import React from 'react'
import Hero from '../hero.png'
import BrandBelt from '../brands.png'

function HeroPage() {
  return (
    <>
    <div className='m-0 h-[675px] bg-[#f2f0f1] px-20 flex'>
      <div className='w-1/2 h-full border-black p-8 flex flex-col items-end  justify-start'>
        <h1 className='capitalize w-11/12 text-[80px] font-bold text-left mt-10 font leading-none mb-5'>
            Find Cloths that matches your style
        </h1>
        <p className='w-11/12 text-left my-2 text-[#616060]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio officia incidunt saepe odio? Labore fugit autem voluptatum corporis nam doloremque ducimus amet animi unde voluptate.</p>
        <div className='w-11/12 flex p-3 pl-0'>
          <button className='p-3 w-40 text-white bg-black rounded-full'>Shop Now</button>
        </div>

        <div className='flex w-11/12'>
          <div className='flex flex-col border-r-2 p-2 pr-7'>
            <h1 className='text-left text-5xl font-bold'>200+</h1>
            <p className='capitalize text-left text-[#616060] w-full'>international brands</p>
          </div>
          <div className='flex flex-col border-r-2 p-2 pr-7'>
            <h1 className='text-left text-5xl font-bold'>2,000+</h1>
            <p className='capitalize text-left text-[#616060]'>high-quality products</p>
          </div>
          <div className='flex flex-col p-2 pr-7'>
            <h1 className='text-left text-5xl font-bold'>30,000+</h1>
            <p className='capitalize text-left text-[#616060]'>happy costumers</p>
          </div>
        </div>

      </div>
      <div className='w-1/2 h-full flex items-end'>
        <img src={Hero} alt="" className='' />
      </div>
    </div>
    <img src={BrandBelt} alt="" className='w-full object-cover' />
    </>
  )
}

export default HeroPage
