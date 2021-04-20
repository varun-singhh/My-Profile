import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-600">
      <div className="flex justify-around">
        <div className="flex m-4">Varun</div>
        <div className="flex m-4 justify-between">
          <p className="px-5">About</p>
          <p className="px-5">skills</p>
          <p className="px-5">projects</p>
          <p className="px-5">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
