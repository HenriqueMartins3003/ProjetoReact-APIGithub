import React from "react";

const Header = () => {
  return (
    <div className="container h-[316px] bg-darkHeader">
      <div className="flex p-8 justify-between">
        <div className="flex">
          {" "}
          <div className="relative h-[20] w-[20] mr-2">
            <img src="/menuIcon.png" alt="IconeMenu" height={20} width={20} />
          </div>
          <div className="relative h-[20] w-[126]">
            <img src="/Logo.png" alt="Sua Logo" height={20} width={126} />
          </div>
        </div>

        <div className="flex">
          <div className="relative h-[20] w-[20] mr-3">
            <img src="/User.png" alt="User" height={20} width={20} />
          </div>
          <span className="text-white">Nome do usuário aqui</span>
          <div className="relative h-[20] w-[126] ml-2 mr-1">
            <img src="/Arrow.png" alt="ArrowIcon" height={20} width={20} />
          </div>
        </div>
      </div>
      <p className="text-4xl text-white flex justify-center mb-4">
        Pesquisa de Satistação
      </p>
    </div>
  );
};

export default Header;
