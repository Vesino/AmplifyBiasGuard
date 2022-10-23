import React from 'react';
import User from './User';


const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center border-b-2 border-brandDark-200 pb-6">
      <img className="w-44" src="/logo.png" alt="BIAS GUARD" />
      <User />
    </div>
  );
}

export default Header;
