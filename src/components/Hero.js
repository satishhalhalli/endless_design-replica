// import React from 'react';
// import personlogo from "../images/person.png"
// const Hero = () => {
//   return (
//     <div className=''>
//       <section className='flex justify-center items-center mt-20'>
//         <div className='w-[420px]'>
//           <ul className='font-sans font-bold text-[24px] opacity-50'>
//             <li>World-class design.</li>
//             <li>Endless requests.</li>
//             <li>One subscription.</li>
//           </ul>

//           <button class="bg-gray-200 px-1 my-8 rounded-lg flex items-center">
//             <div class="w-4 h-4 rounded-full bg-gradient-to-tr from-yellow-200 to-pink-500 mr-2"></div>
//             <div>
//               <a href="" class="box-content shadow-lg p-2 inline-block">
//                 <div class="inline">
//                   <h1 class="font-sans font-medium text-sm">Limited Availability</h1>
//                 </div>
//               </a>
//             </div>
//           </button>
//         </div>
//         <div></div>
//       </section>

//       {/* <div className='flex items-center'>
//         <ul className='w-[420px] space-y-2'>
//           <li className=' bg-slate-300 inline p-[6px] rounded-md font-sans text-[12px] text-opacity-5'>Hey, Daryl here, founder of Endless.</li>
//           <li className=' bg-slate-300 inline  p-[6px] rounded-md font-sans text-[12px] text-opacity-5'>So what's Endless? Good question.</li>
//           <li className=' bg-slate-300  p-[6px] rounded-md font-sans text-[12px] text-opacity-5'>Endless is an unlimited design agency.</li>
//           <li className=' bg-slate-300  p-[6px] rounded-md font-sans text-[12px] text-opacity-5'>See, unlike relying on freelancers or spending months trying to hire the perfect designer, Endless keeps it simple and offers unlimited design requests and revisions for a flat monthly fee.</li>
//           <li className=' bg-slate-300  p-[6px] rounded-md font-sans text-[12px] text-opacity-5'>You can create as many design requests as you want and we'll close them off one by one within a few business days on average.</li>
//         </ul>
//       </div> */}
//       {/* <div className='flex items-center'>
//   <ul className='w-[420px]'>
//     <li className='mb-4 bg-slate-300 inline p-[6px] rounded-md font-sans text-[12px] text-opacity-5'>Hey, Daryl here, founder of Endless.</li>
//     <li className='mb-4'>So what's Endless? Good question.</li>
//     <li className='mb-4'>Endless is an unlimited design agency.</li>
//     <li className='mb-4'>See, unlike relying on freelancers or spending months trying to hire the perfect designer, Endless keeps it simple and offers unlimited design requests and revisions for a flat monthly fee.</li>
//     <li className='mb-4'>You can create as many design requests as you want and we'll close them off one by one within a few business days on average.</li>
//   </ul>
// </div> */}

// <div className='flex items-center'>
//   <ul className='w-[420px] space-y-2'>
//     <li className='font-sans text-[12px] text-opacity-5'>
//       <div className='flex'>
//         <div className='bg-slate-300 inline p-[6px] rounded-md'>
//           Hey, Daryl here, founder of Endless.
//         </div>
//       </div>
//     </li>
//     <li className='font-sans text-[12px] text-opacity-5'>
//       <div className='flex'>
//         <div className='bg-slate-300 inline p-[6px] rounded-md'>
//           So what's Endless? Good question.
//         </div>
//       </div>
//     </li>
//     <li className='font-sans text-[12px] text-opacity-5'>
//       <div className='flex'>
//         <div className='bg-slate-300 inline p-[6px] rounded-md'>
//           Endless is an unlimited design agency.
//         </div>
//       </div>
//     </li>
//     <li className='font-sans text-[12px] text-opacity-5'>
//       <div className='flex'>
//         <div className='bg-slate-300 inline p-[6px] rounded-md'>
//           See, unlike relying on freelancers or spending months trying to hire the perfect designer, Endless keeps it simple and offers unlimited design requests and revisions for a flat monthly fee.
//         </div>
//       </div>
//     </li>
//     <li className='font-sans text-[12px] text-opacity-5'>
//       <div className='flex'>
//         <div className='bg-slate-300 inline p-[6px] rounded-md'>
//           You can create as many design requests as you want and we'll close them off one by one within a few business days on average.
//         </div>
//       </div>
//     </li>
//   </ul>

//   <div className='flex items-center'>
//     <div className='flex'>
//      <img src={personlogo} alt='person logo' className='h-[24px] rounded-full'/>
//      <h1 className='px-2 text-xs text-opacity-5'>3m ago</h1>
//     </div>

//   </div>
// </div>

//     </div>
//   );
// };

// export default Hero;
import React from "react";
import personlogo from "../images/person.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <section className="flex justify-center items-center mt-20 ">
        <div className="w-[420px]">
          <ul className="font-sans font-bold text-[24px] opacity-50">
            <li>World-class design.</li>
            <li>Endless requests.</li>
            <li>One subscription.</li>
          </ul>

          <button className="bg-gray-200 px-1 my-8 rounded-lg flex items-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-yellow-200 to-pink-500 mr-2"></div>
            <div>
              <a href="" className="box-content shadow-lg p-2 inline-block">
                <div className="inline">
                  <h1 className="font-sans font-medium text-sm">
                    Limited Availability
                  </h1>
                </div>
              </a>
            </div>
          </button>
        </div>
        <div></div>
      </section>

      <div className="flex justify-center items-center">
        <ul className="w-[420px] space-y-2">
          <li className="font-sans text-[16px] text-opacity-50">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md ">
              Hey, Daryl here, founder of Endless.
            </div>
          </li>
          <li className="font-sans text-[16px] text-opacity-5">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md">
              So what's Endless? Good question.
            </div>
          </li>
          <li className="font-sans text-[16px] text-opacity-5">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md">
              Endless is an unlimited design agency.
            </div>
          </li>
          <li className="font-sans text-[16px] text-opacity-5">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md">
              See, unlike relying on freelancers or spending months trying to
              hire the perfect designer, Endless keeps it simple and offers
              unlimited design requests and revisions for a flat monthly fee.
            </div>
          </li>
          <li className="font-sans text-[16px] text-opacity-5">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md">
              You can create as many design requests as you want and we'll close
              them off one by one within a few business days on average.
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-2">
        <div className="flex justify-center items-center">
          <div className="w-[420px] flex items-center">
            <img
              src={personlogo}
              alt="person logo"
              className="h-[24px] rounded-full"
            />
            <span className="px-2 text-xs text-opacity-5">Now</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <ul className="w-[420px] space-y-2">
          <li className="font-sans text-[16px] ">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md">
              It gets better.
            </div>
          </li>
          <li className="font-sans text-[16px] text-opacity-5">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md">
              There's no calls to take up your time.
            </div>
          </li>
          <li className="font-sans text-[16px] text-opacity-5">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md">
              No boring lengthy contracts to sign.
            </div>
          </li>
          <li className="font-sans text-[16px] text-opacity-5">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md">
              You can chat directly to us anytime in Slack.
            </div>
          </li>
          <li className="font-sans text-[16px] text-opacity-5">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md">
              You can even pause or cancel your subscription at any time should
              your need for design work dry up.
            </div>
          </li>
          <li className="font-sans text-[16px] text-opacity-5">
            <div className="inline-block bg-gray-100 p-[6px] rounded-md">
              It's time to change things up.
            </div>
          </li>
        </ul>
      </div>

      {/* <div className="mt-2">
        <div className="flex justify-center items-center">
          <img
            src={personlogo}
            alt="person logo"
            className="h-[24px] rounded-full"
          />
          <h1 className="px-2 text-xs text-opacity-5">3m ago</h1>
        </div>
      </div> */}

      <div className="mt-2">
        <div className="flex justify-center items-center">
          <div className="w-[420px] flex items-center">
            <img
              src={personlogo}
              alt="person logo"
              className="h-[24px] rounded-full"
            />
            <span className="px-2 text-xs text-opacity-5">3m ago</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <ul className="w-[420px] space-y-2">
          <Link to="Plans" smooth={true} duration={500}>
            <li className="font-sans text-[16px] text-opacity-5">
              <div className="inline-block bg-gray-100 p-[6px] rounded-md underline cursor-pointer">
                See subscription plans.
              </div>
            </li>
          </Link>
        </ul>
      </div>

      {/* <div className="mt-2">
        <div className="flex justify-center items-center">
          <img
            src={personlogo}
            alt="person logo"
            className="h-[24px] rounded-full"
          />
          <h1 className="px-2 text-xs text-opacity-5">Now</h1>
        </div>
      </div> */}
      <div className="mt-2">
        <div className="flex justify-center items-center">
          <div className="w-[420px] flex items-center">
            <img
              src={personlogo}
              alt="person logo"
              className="h-[24px] rounded-full"
            />
            <span className="px-2 text-xs text-opacity-5">Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
