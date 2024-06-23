import React from 'react'

function Subscribe() {
  return (
    <div className='w-4/5 bg-black text-white p-10 m-auto mt-[-180px] rounded-3xl flex'>
      <div className='w-1/2'>
        <h1 className='text-4xl font-extrabold uppercase text-left leading-snug'>stay upto date about <br /> our latest offers</h1>
      </div>
      <form action="" className='w-1/2 flex flex-col justify-center items-center'>
        <input type="text" name="" id="" placeholder='enter your email address' className='w-4/5 p-3 rounded-3xl placeholder:text-left placeholder:pl-3 placeholder:capitalize' />
        <button type="submit" className='w-4/5 p-3 rounded-3xl text-center pl-3 capitalize bg-white mt-2 text-black font-semibold text-md'>Subscribe to newsletter</button>
      </form>
    </div>
  )
}

export default Subscribe
