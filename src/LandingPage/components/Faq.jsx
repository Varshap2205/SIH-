import React from "react";
import Accordion from "./Accordion";

function Faq() {
  return (
    <>
      <div className=" flex flex-col justify-start h-screen">
        <div className="justify-start text-6xl  lg:ml-20 capitalize text-white mt-2">
          FAQ's
        </div>
        <Accordion />
      </div>
    </>
  );
}

export default Faq;
