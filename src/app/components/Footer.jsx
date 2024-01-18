import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/LOGO.svg"

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src={Logo} alt="Logo" width={100} height={100}/>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;  