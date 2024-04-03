import Sports from "@/components/ui/Sports/Sports";
import TicketCollection from "@/components/ui/TicketCollection/TicketCollection";
import Toogle from "@/components/ui/Toggle/Toogle";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <div className=" flex p-2 justify-between">
        <h1 className="text-2xl dark:text-[#FFFFFF] font-bold underline underline-offset-8  decoration-[#738FFF] ">
          Sports
        </h1>
        <Toogle/>
      </div>
      <div className="">
        <Sports />
      </div>
      <div>
        <TicketCollection/>
      </div>
    </div>
  );
};

export default HomePage;
