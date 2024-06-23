import React from 'react'
import Subscribe from './Subscribe'

function Footer() {
  return (
    <div className='bg-[#f0f0f0] pt-20'>
        <Subscribe/>
      <div className='px-40 flex justify-between py-20'>
        <div className='w-1/6'>
            <h1 className='text-3xl text-left pb-5 font-bold'>SHOP.CO</h1>
            <p className='text-left text-[#616161]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium sit, beatae repellendus debitis totam odio ea, expedita laboriosam asperiores amet obcaecati minima ipsum earum?</p>
            <div>

            </div>
        </div>
        
        <div>
            <h1 className='text-xl font-semibold text-left uppercase tracking-wide'>company</h1>
            <ul className='text-[#616161] text-left mt-6 capitalize'>
                <li className='my-2'>about</li>
                <li className='my-2'>features</li>
                <li className='my-2'>works</li>
                <li className='my-2'>career</li>
            </ul>
        </div>

        <div>
            <h1 className='text-xl font-semibold text-left uppercase tracking-wide'>help</h1>
            <ul className='text-[#616161] text-left mt-6 capitalize'>
                <li className='my-2'>customer support</li>
                <li className='my-2'>delivery details</li>
                <li className='my-2'>terms & conditions</li>
                <li className='my-2'>privacy policy</li>
            </ul>
        </div>

        <div>
            <h1 className='text-xl font-semibold text-left uppercase tracking-wide'>faq</h1>
            <ul className='text-[#616161] text-left mt-6 capitalize'>
                <li className='my-2'>account</li>
                <li className='my-2'>manage deliveries</li>
                <li className='my-2'>orders</li>
                <li className='my-2'>payments</li>
            </ul>
        </div>

        <div>
            <h1 className='text-xl font-semibold text-left uppercase tracking-wide'>resources</h1>
            <ul className='text-[#616161] text-left mt-6 capitalize'>
                <li className='my-2'>free eBooks</li>
                <li className='my-2'>development tutorial</li>
                <li className='my-2'>how to- blog</li>
                <li className='my-2'>youtube playlist</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
