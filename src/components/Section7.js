import React from 'react';

const Section7 = () => {
  return (
    <div>
      <section className='flex justify-center items-center mt-20'>
        <div className='w-[420px]'>
          <ul className='font-sans font-bold text-[24px] '>
            <li>Got some questions?</li>
            <li>Here's some answers.</li>
          </ul>
        </div>
        </section>
        
        <div className='flex justify-center items-center mt-16'>
        <div className="accordion w-[420px] space-y-6">
          <details className="accordion-item border border-gray-400 rounded-md">
            <summary className="accordion-title bg-white text-black font-semibold p-2 rounded-md cursor-pointer  shadow-md">
              Why Endless instead of hiring?
            </summary>
            <div className="accordion-content p-4 bg-white rounded-md  shadow-md">
              <p>
                Hiring a full-time designer not only will take you weeks to months to source the right candidate, it will also cost you a fortune!
              </p>
              {/* Add more content here... */}
            </div>
          </details>

          <details className="accordion-item border  border-gray-400 rounded-md">
            <summary className="accordion-title bg-white text-black font-semibold p-2 rounded-md cursor-pointer shadow-md">
              How quickly will I receive designs?
            </summary>
            <div className="accordion-content p-4 bg-white rounded-md  shadow-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et, qui asperiores autem quia rem delectus numquam, unde, placeat ex ab culpa voluptatibus quaerat. Iste quam magni ipsum obcaecati hic laudantium.
              </p>
              {/* Add more content here... */}
            </div>
          </details>

         
        

          <details className="accordion-item border border-gray-400 rounded-md">
            <summary className="accordion-title bg-white text-black font-semibold p-2 rounded-md cursor-pointer shadow-md">
            Why no calls or meetings?
            </summary>
            <div className="accordion-content p-4 bg-white rounded-md  shadow-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et, qui asperiores autem quia rem delectus numquam, unde, placeat ex ab culpa voluptatibus quaerat. Iste quam magni ipsum obcaecati hic laudantium.
              </p>
              {/* Add more content here... */}
            </div>
          </details>

          <details className="accordion-item border border-gray-400 rounded-md">
            <summary className="accordion-title bg-white text-black font-semibold p-2 rounded-md cursor-pointer  shadow-md">
            what if i don't like my design?
            </summary>
            <div className="accordion-content p-4 bg-white rounded-md  shadow-md">
              <p>
                Hiring a full-time designer not only will take you weeks to months to source the right candidate, it will also cost you a fortune!
              </p>
              {/* Add more content here... */}
            </div>
          </details>

          <details className="accordion-item border border-gray-400 rounded-md">
            <summary className="accordion-title bg-white text-black font-semibold p-2 rounded-md cursor-pointer  shadow-md">
            is there a request limit?
            </summary>
            <div className="accordion-content p-4 bg-white rounded-md  shadow-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et, qui asperiores autem quia rem delectus numquam, unde, placeat ex ab culpa voluptatibus quaerat. Iste quam magni ipsum obcaecati hic laudantium.
              </p>
              {/* Add more content here... */}
            </div>
          </details>

          <details className="accordion-item border border-gray-400 rounded-md">
            <summary className="accordion-title bg-white text-black font-semibold p-2 rounded-md cursor-pointer  shadow-md">
            what design software do u use?
            </summary>
            <div className="accordion-content p-4 bg-white rounded-md  shadow-md">
              <p>
                Hiring a full-time designer not only will take you weeks to months to source the right candidate, it will also cost you a fortune!
              </p>
              {/* Add more content here... */}
            </div>
          </details>

          <details className="accordion-item border border-gray-400 rounded-md">
            <summary className="accordion-title bg-white text-black font-semibold p-2 rounded-md cursor-pointer shadow-md">
            r there any refunds?
            </summary>
            <div className="accordion-content p-4 bg-white rounded-md border shadow-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et, qui asperiores autem quia rem delectus numquam, unde, placeat ex ab culpa voluptatibus quaerat. Iste quam magni ipsum obcaecati hic laudantium.
              </p>
              {/* Add more content here... */}
            </div>
          </details>

        </div>
        </div>
    </div>
  );
};

export default Section7;
