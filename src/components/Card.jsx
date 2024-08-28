import React from "react";

const Card = (props) => {
  return (
    <div className="m-2 h-[300px] group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-between gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
      <p className="font-semibold text-gray-200 bg-transparent tracking-wider group-hover:text-gray-700 text-xl">
        {props.quote}
      </p>
      <div className="bg-transparent flex flex-row justify-between items-center w-full">
        <p className="bg-transparent text-[#abd373] font-semibold group-hover:text-gray-800">
          -- {props.author}
        </p>
      </div>
    </div>
  );
};

export default Card;
