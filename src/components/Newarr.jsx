import React from 'react'
import Cards1 from './Cards1'

function Newarr() {

  const urls = [];

  for (let i = 1; i < 5; i++) {
    urls.push(`./images/img${i}.png`);
  }

  return (
    <div className='p-1'>
      <h1 className='text-7xl font-bold my-10'>NEW ARRIVALS</h1>
      <div className='flex justify-between items-center px-28'>

        <Cards1
        Img= {urls[0]}
        Title="T-shirt with tape detail"
        Amount={49}
        />

        <Cards1
        Img= {urls[1]}
        Title="skinny fit jeans"
        Amount={99}
        />

        <Cards1
        Img= {urls[2]}
        Title="checkered skirt"
        Amount={45}
        />

        <Cards1
        Img= {urls[3]}
        Title="sleeve stripped t-shirt"
        Amount={59}
        />

      </div>
      <div>
        <button className='capitalize border-2 border-[#616060] p-2 px-5 rounded-full my-10'>view all</button>
      </div>
      <div className='flex justify-center'>
        <hr className='w-5/6 m-10 border-2' />
      </div>
    </div>
  )
}

export default Newarr
