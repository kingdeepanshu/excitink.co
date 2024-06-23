import React from 'react'

function Cards1({Title, Amount, Img}) {

  return (
    <div className='w-full m-6 p-2'>
      <div className='w-full'>
        <img src={Img} alt="" className='w-full rounded-xl object-contain' />
      </div>
      <div>
        <h1 className='text-md text-left font-semibold p-1 capitalize'>{Title}</h1>
        <h1 className='text-xl text-left font-bold pl-1'>&#8377;{Amount}</h1>
      </div>
    </div>
  )
}

export default Cards1
