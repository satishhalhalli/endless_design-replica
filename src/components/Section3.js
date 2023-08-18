import React from "react";

const Section3 = () => {
  return (
    <div>
      <section className="flex justify-center items-center mt-20 ">
        <div className="w-[420px]">
          <ul className="font-sans font-bold text-[24px] ">
            <li>Tired of bad design?</li>
            <li>Let's do something great.</li>
            <li>Subscribe today.</li>
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
      </section>
      <div
        name="Plans"
        className="flex justify-center items-center mt-20  flex-col"
      >
        <div className="card border border-gray-400 rounded-2xl shadow-lg w-[420px] h-[220px] flex-col ">
          <div className="flex justify-between">
            <h1>
              <span className="font-bold">Monthly</span>
              $6,995/mo
            </h1>
            <span className="bg-orange-200 text-orange-600 p-1 rounded-md">
              Popular
            </span>
          </div>

          <diV className="mt-5">
            <p className="font-sans text-lg">
              Perfect for those with an on-going need for design work and a need
              to grow.
            </p>
          </diV>

          <div className="flex my-2">
            <button className="bg-slate-900 text-white px-5 py-2 rounded-lg ">
              Subcribe
            </button>
            <button className="bg-slate-500 text-black px-5 py-2 mx-2 rounded-lg">
              Chat
            </button>
          </div>

          <h1 className="my-2 opacity-80">Limited availability</h1>
        </div>

        <div className="card border border-gray-400 rounded-2xl shadow-lg w-[420px] h-[220px] flex-col mt-6">
          <div className="flex justify-between">
            <h1>
              <span className="font-bold">Quaterly</span> $6,495/mo
            </h1>
            <span className="bg-gray-400 text-white p-1 rounded-md">
              Save $500/mo
            </span>
          </div>

          <diV className="mt-5">
            <p className="font-sans text-lg">
              Perfect for startups and teams looking for design work on
              longer-term projects.
            </p>
          </diV>

          <div className="flex my-2">
            <button className="bg-slate-900 text-white px-5 py-2 rounded-lg ">
              Subcribe
            </button>
            <button className="bg-slate-500 text-black px-5 py-2 mx-2 rounded-lg">
              Chat
            </button>
          </div>

          <h1 className="my-2 opacity-80">Paid quarterly</h1>
        </div>
      </div>
    </div>
  );
};

export default Section3;
