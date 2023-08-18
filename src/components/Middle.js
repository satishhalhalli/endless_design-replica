import React from 'react';
import mobile from "../images/mobile.png";
import mobile1 from "../images/mobile2.png";
import mobile3 from "../images/mobile3.png";
import mobile4 from "../images/mobile4.png";
import personlogo from "../images/person.png"
const Middle = () => {
  return (
    <div className='flex flex-col mt-40'>
      <div className='w-[420px] mb-4 mx-auto'>
        <ul className='font-sans font-semibold text-[20px] space-y-2'>
          <li>We make you stand out.</li>
          <li>We make you exceptional.</li>
          <li>We make you—you.</li>
        </ul>
      </div>

      <div className='mt-[30px] overflow-x-scroll flex'>
        <div className='flex'>
          <img src={mobile} alt='mobile' className='w-[269px] h-[583px] rounded-lg shadow-md mx-5'/>
          <img src={mobile1} alt='mobile' className='w-[269px] h-[583px] rounded-lg shadow-md mx-5'/>
          <img src="https://framerusercontent.com/images/7pWBzvt3ZRSeuA7ZXUGPP9at1Q.png?scale-down-to=1024" alt='mobile' className='w-[934px] h-[583px] rounded-lg shadow-md mx-5'/>
          <img src={mobile3} alt='mobile' className='w-[269px] h-[583px] rounded-lg shadow-md mx-5'/>
          <img src="https://framerusercontent.com/images/4PFpaB82G4mlCAIdo55Cu8HdCs.png?scale-down-to=1024" alt='mobile' className='w-[934px] h-[583px] rounded-lg shadow-md mx-5'/>
          <img src={mobile4} alt='mobile' className='w-[269px] h-[583px] rounded-lg shadow-md mx-5'/>
          <img src="https://framerusercontent.com/images/65FgazSbsqKTDKFi5iw3zU1kAe8.png?scale-down-to=1024" alt='mobile' className='w-[934px] h-[583px] rounded-lg shadow-md mx-5'/>
        </div>
      </div>

      <div className='flex justify-center items-center mt-20'>
        <ul className='w-[420px] space-y-2'>
          <li className='font-sans text-[16px] text-opacity-50'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md '>
            Daryl again.
            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            Our goal is to make you a leader in your industry.


            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            So if you're not serious, close your tab.
            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            We only want to work with those who want to level up through the use of great design.
            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            We want to make your competition irrelevant.
            </div>
          </li>

          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            Honestly, I'll be disappointed if we don't.
            </div>
          </li>
        </ul>
      </div>
     
 <div className='mt-2'>
  <div className='flex justify-center items-center'>
    <div className='w-[420px] flex items-center'>
      <img src={personlogo} alt='person logo' className='h-[24px] rounded-full'/>
      <span className='px-2 text-xs text-opacity-5'>3m ago</span>
    </div>
  </div>
</div>


<div className='flex justify-center items-center mt-20'>
        <ul className='w-[420px] space-y-2'>
          <li className='font-sans text-[16px] text-opacity-50'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md '>
            I've been designing for 20 years.
            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            I've seen it all—the good, and the bad.


            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            Honestly, way too much of the bad.
            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            Great design takes focus, thought and care.
            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            People can determine within seconds if you're worth their time just by looking at your design.
            </div>
          </li>

          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md'>
            Make it count.
            </div>
          </li>
        </ul>
      </div>
     
 <div className='mt-2'>
  <div className='flex justify-center items-center'>
    <div className='w-[420px] flex items-center'>
      <img src={personlogo} alt='person logo' className='h-[24px] rounded-full'/>
      <span className='px-2 text-xs text-opacity-5'>3m ago</span>
    </div>
  </div>
</div>

<div className='flex justify-center items-center mt-20'>
        <ul className='w-[420px] space-y-2'>
        <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md '>
            Want to make a good first impression?
            </div>
          </li>
          <li className='font-sans text-[16px] text-opacity-5'>
            <div className='inline-block bg-gray-100 p-[6px] rounded-md underline'>
            See subscription plans.
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
  );
}

export default Middle;
