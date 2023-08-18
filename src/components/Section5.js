import React from 'react'
import personlogo from "../images/logo.png"
import logo from "../images/person.png"
import personlogo1 from "../images/person2.png"
const Section5 = () => {
  return (
    <section className='flex justify-center items-center mt-20 '>
    <div className='w-[420px]'>
      
      
      
        <div className='flex justify-center items-center '>
        <ul className='w-[420px] '>
         
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            Can I get a testimonial?


            </div>
          </li>
          </ul>
          </div>
       
          <div className='mt-2'>
  <div className='flex justify-center items-center'>
    <div className='w-[420px] flex items-center'>
      <img src={logo} alt='person logo' className='h-[24px] rounded-full'/>
      <span className='px-2 text-xs text-opacity-5'>2days ago</span>
    </div>
  </div>
</div>



<div className='grid '>
  <ul className='w-[420px] grid justify-items-end '>
    <li className='font-sans text-[16px] text-opacity-50'>
      <div className='inline-block bg-gray-300 p-[6px] rounded-md '>
      Sure, one second.
      </div>
    </li>
  </ul>
</div>

<div className='mt-2 grid justify-items-end'>
  <div className='w-[420px]  grid justify-items-end space-x-2'>
  
  <img src={personlogo1} alt='person logo' className='h-[24px] w-[24px] rounded-full'/>
    <span className='text-xs text-opacity-5'>1 day ago</span>
  </div>
</div>


<div className='grid mt-10'>
  <ul className='w-[420px] grid justify-items-end space-y-2'>
    <li className='font-sans text-[16px] text-opacity-50'>
      <div className='inline-block bg-gray-300 p-[6px] rounded-md '>
      I was initially skeptical of "Design-as-a-subscription", but working with Endless was an absolute dream.
      </div>
    </li>
    <li className='font-sans text-[16px] text-opacity-50'>
      <div className='inline-block bg-gray-300 p-[6px] rounded-md '>
      They nailed pretty much everything from social assets to an entire UX redesign first time—no revisions needed.
      </div>
    </li>
    <li className='font-sans text-[16px] text-opacity-50'>
      <div className='inline-block bg-gray-300 p-[6px] rounded-md '>
      I was extremely impressed with both the quantity and quality of work that was completed.
      </div>
    </li>
  </ul>
</div>

<div className='mt-2 grid justify-items-end'>
  <div className='w-[420px]  grid justify-items-end space-x-2'>
  
    {/* <span className='h-[24px] w-[24px] rounded-full bg-orange-700 text-center inline-flex items-center justify-center text-xs'>
      A
    </span> */}
     <img src={personlogo1} alt='person logo' className='h-[24px] w-[24px] rounded-full'/>
    <span className='text-xs text-opacity-5'>1 day ago</span>
  </div>
</div>


<div className='flex justify-center items-center mt-4'>
        <ul className='w-[420px] '>
         
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            Thanks, Joe—you're too kind!


            </div>
          </li>
          </ul>
          </div>
       
          <div className='mt-2'>
  <div className='flex justify-center items-center'>
    <div className='w-[420px] flex items-center'>
      <img src={logo} alt='person logo' className='h-[24px] rounded-full'/>
      <span className='px-2 text-xs text-opacity-5'>now</span>
    </div>
  </div>
</div>
</div>
</section>

  )
}

export default Section5
