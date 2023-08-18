import React from 'react'
import personlogo from "../images/person.png"
const Section1 = () => {
  return (
    
        <section className='flex justify-center items-center mt-20 '>
        <div className='w-[420px]'>
          <ul className='font-sans font-bold text-[24px] '>
            <li>We only design you what we're exceptionally good at.</li>
           
          </ul>

          <ul className='font-sans mt-10 text-[18px] '>
            <li>We know our weaknesses, and we know our strengths. So we leave no room for disappointment by only designing what we excel at..</li>
            <ul className='flex flex-wrap justify-between m-10 font-semibold'>
                <li className='w-1/2 p-2'>
Branding</li>
                <li className='w-1/2 p-2'>Mobile Apps</li>
                <li className='w-1/2 p-2'>Design Systems</li>
                <li className='w-1/2 p-2'>Web Apps</li>
                <li className='w-1/2 p-2'>Landing Pages</li>
                <li className='w-1/2 p-2'>Icons</li>
                
            </ul>
           
          </ul>


          <div className='flex justify-center items-center mt-20'>
        <ul className='w-[420px] space-y-2'>
          <li className='font-sans text-[16px] text-opacity-50'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md '>
            Basically.
            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            Apps and web are our bread and butter.


            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            We can also give you an identity.
            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            We can even fix up your design system, or build you one entirely from scratch—they're super powerful.
            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            Or if you want some fun little icons.
            </div>
          </li>

          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            We can do that too.
            </div>
          </li>

          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            But we won't be making you any custom graphics for your gaming clan. We could, but you wouldn't like it.
            </div>
          </li>

          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            We'll just stick to what we're good at.
            </div>
          </li>
        </ul>
      </div>
     
 <div className='mt-2'>
  <div className='flex justify-center items-center'>
    <div className='w-[420px] flex items-center'>
      <img src={personlogo} alt='person logo' className='h-[24px] rounded-full'/>
      <span className='px-2 text-xs text-opacity-5'>Now</span>
    </div>
  </div>
</div>
    </div>

   
    </section>
  )
}

export default Section1
