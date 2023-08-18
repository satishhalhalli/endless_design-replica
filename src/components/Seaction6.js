import React from "react";
import logo from "../images/person.png";
import { Link } from "react-scroll";
const Seaction6 = () => {
  return (
    <section className="flex justify-center items-center mt-20 ">
      <div className="w-[420px] ">
        <div className="flex justify-center items-center ">
          <ul className="w-[420px] space-y-2">
            <li className="font-sans text-[16px] text-opacity-5">
              <div className="inline-block bg-gray-100 p-[6px] rounded-md">
                Oh, hey there again.
              </div>
            </li>
            <li className="font-sans text-[16px] text-opacity-5">
              <div className="inline-block bg-gray-100 p-[6px] rounded-md">
                I'm honestly surprised you made it this far.
              </div>
            </li>
            <li className="font-sans text-[16px] text-opacity-5">
              <div className="inline-block bg-gray-100 p-[6px] rounded-md">
                Well, this is awkward.
              </div>
            </li>
            <li className="font-sans text-[16px] text-opacity-5">
              <div className="inline-block bg-gray-100 p-[6px] rounded-md">
                So, what now?
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-2">
          <div className="flex justify-center items-center">
            <div className="w-[420px] flex items-center">
              <img
                src={logo}
                alt="person logo"
                className="h-[24px] rounded-full"
              />
              <span className="px-2 text-xs text-opacity-5">1m ago</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-12">
          <ul className="w-[420px] space-y-2">
            <Link to="Plans" smooth={true} duration={500}>
              <li className="font-sans text-[16px] text-opacity-5">
                <div className="inline-block bg-gray-100 p-[6px] rounded-md cursor-pointer">
                  I guess you could see .
                  <span
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    See subscription plans.
                  </span>
                </div>
              </li>
            </Link>
            <li className="font-sans text-[16px] text-opacity-5">
              <div className="inline-block bg-gray-100 p-[6px] rounded-md">
                As we'd love to work with you.
              </div>
            </li>
            <li className="font-sans text-[16px] text-opacity-5">
              <div className="inline-block bg-gray-100 p-[6px] rounded-md">
                See you in Slack?
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-2">
          <div className="flex justify-center items-center">
            <div className="w-[420px] flex items-center">
              <img
                src={logo}
                alt="person logo"
                className="h-[24px] rounded-full"
              />
              <span className="px-2 text-xs text-opacity-5">Now</span>
            </div>
          </div>
        </div>

        <p className="mt-56">© 2023 Rejiggle</p>
      </div>
    </section>
  );
};

export default Seaction6;
