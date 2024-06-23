import React from 'react'

function Category() {
  const urls = [];

  for (let i = 1; i < 5; i++) {
    urls.push(`./images/cat${i}.png`);
  }

  return (
    <div className='p-36'>
      <div className='bg-[#f0f0f0] p-10 w-full h-[600px] rounded-2xl grid grid-cols-5 gap-10'>
        <div className='col-span-2 overflow-hidden rounded-2xl'>
            <img src={urls[0]} alt="" className='w-full h-[250px] object-cover' />
        </div>
        <div className='col-span-3 overflow-hidden rounded-2xl'>
            <img src={urls[1]} alt="" className='w-full h-[250px] object-cover' />
        </div>
        <div className='col-span-3 overflow-hidden rounded-2xl'>
            <img src={urls[2]} alt="" className='w-full h-[250px] object-cover' />
        </div>
        <div className='col-span-2 overflow-hidden rounded-2xl'>
            <img src={urls[3]} alt="" className='w-full h-[250px] object-cover' />
        </div>
        
      </div>
    </div>
  )
}

export default Category
