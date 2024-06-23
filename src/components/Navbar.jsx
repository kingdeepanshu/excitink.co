import React from 'react'

function Navbar() {
  return (
    <>
    <div className='m-0 flex px-28 border-2 justify-around py-5 items-center'>
      <h1 className='w-1/6 text-3xl font-extrabold'>SHOP.CO</h1>
      <menu className='w-2/6'>
        <ul className='flex justify-between w-full h-full items-center text-xl'>
          <li className='hover:font-semibold '>Shop</li>
          <li className='hover:font-semibold '>On Sale</li>
          <li className='hover:font-semibold '>New Arrivals</li>
          <li className='hover:font-semibold '>Brands</li>
        </ul>
      </menu>
      <div className='w-2/6 flex items-center'>
        <i class="fa-solid fa-magnifying-glass rounded-l-full bg-[#f0f0f0] p-5 h-12 align-middle flex items-center"></i>
        <input type="text" name="" id="" className='bg-[#f0f0f0] p-2 text-xl w-full rounded-full  rounded-l-none text-left h-12 outline-none' placeholder='search..' />
      </div>
      <div className='flex justify-between w-12 items-center'>
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-user"></i>
      </div>
    </div>
    </>
  )
}

export default Navbar
