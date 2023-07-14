import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-walterWhite p-5 justify-center flex flex-col items-center">
      <Image
        src="/logo.png"
        height={23}
        width={133}
        alt="logo FullStack week"
      />
      <p className="text-sm mt-1 text-primaryDarker font-medium">
        {" "}
        Todos os direitos reservados
      </p>
    </div>
  );
};

export default Footer;
