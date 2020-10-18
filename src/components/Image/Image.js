import React from "react";

function Image({source,name}) {

  return (
    <div className={name.length>20 ?"slide-right" :"overflow-hidden"}>
      <img 
      alt=""
        src={ require(`../../slices/${source}`)}
        className="w-full" 
      />
      <div className="px-0 py-2 h-8 ">
        <p className="text-white-300 text-sm mb-2">
          {name}
        </p>
      </div>
    </div>
  );
}

export default Image;
