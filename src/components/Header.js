import React from 'react';
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[420px]'>
      <img src={logo} alt='logo' className='w-14 display-block' />
      </div>
    </div>
  );
};

export default Header;
