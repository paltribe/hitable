import React from "react";
import { MdCreditCard, MdOutlineSoupKitchen } from "react-icons/md";

const msg = "bxh bcbwwc  wbuiw wjcwcbw ncwikbc wjwnchwhoiww w cwc ikhwwwjw w cwc hw bchjw"

function Cooked({...props}) {
  return (
    <div className="bg-[#2C62F0]/10 mx-6 rounded-2xl transition-all duration-200">
    <div className="flex justify-between">
      <div className="py-4 mx-4">
        <button
          className={`font-normal relative text-black rounded-full bg-white`}
        >
          <div className="inline-flex items-center justify-start">
            <div
              className={`w-[1.5rem] absolute left-1 h-[1.5rem] bg-[#2C62F0] rounded-full`}
            >
              <MdOutlineSoupKitchen className="mt-1 ml-1 text-white" />
            </div>
            <div className="capitalize font-[500] text-lg text-[#2C62F0]/80 pl-2 ml-6 mr-4">
              cooked
            </div>
          </div>
        </button>
      </div>
      <div className="font-normal text-[#002D4B]/40 text-[0.875rem] mt-6 mr-6 leading-[1rem]">
        {props.time}
      </div>
    </div>
    <div className="flex justify-between pb-4">
      <div className="mx-6 -mt-3">
        <div className="font-[500] mt-1 text-[#002D4B] text-[1rem] leading-[1.25rem]">
        {props.tableName ? props.tableName: "T-01"}

        </div>
        <div className="capitalize font-normal mt-1 text-[#002D4B]/40 text-[0.875rem] leading-[1rem]">
          {props.message.length < 30 ? props.message:props.message.slice(0, 30)+"..."}
        </div>
      </div>
      <div>
        <label className="relative inline-flex items-center mr-8 scale-150 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" defaultChecked/>
          <div className="w-11 h-6 bg-gray-400 rounded-full peer dark:bg-[#2C62F0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#2C62F0] peer-checked:bg-[#2C62F0]"></div>
        </label>
      </div>
    </div>
  </div>
  );
}

export default Cooked;
