import React from "react";
import Logo from "./assets/icons/Logo.png";

const Navbar = () => {
  return (
    <div className="p-3">
      <img className="ml-20" src={Logo} alt="Logo" height={90} width={90} />
    </div>
  );
};

export default Navbar;
