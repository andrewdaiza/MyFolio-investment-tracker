import React from "react";

const NavBar = ({ addLimit }) => {
  return (
    <div className='nav-bar'>
      <a className='nav-links' onClick={(e) => addLimit(10)}>
        Top 10
      </a>
      <a className='nav-links' onClick={(e) => addLimit(25)}>
        Top 25
      </a>
      <a className='nav-links' onClick={(e) => addLimit(50)}>
        Top 50
      </a>
    </div>
  );
};

export default NavBar;
