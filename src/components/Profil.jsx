import React from "react";

export default function Profil({ profilPicture, name }) {
  return (
    <div className="flex items-center ">
      <div className="w-15 h-15 rounded-full overflow-hidden items-center mr-5">
        <img
          src={profilPicture}
          alt="Profile"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="text-black font-montserrat mr-5 text-center pl-1 text-[30px]">
        {name}
      </div>
    </div>
  );
}
