import React, { useState } from "react";
import Worksheet from "./Worksheet";
import WorkingWorkSheets from "./WorkingWorkSheets";

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-3" // Added padding here
      >
        <span className="font-semibold text-lg">{title}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {/* Animated content section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <AccordionItem
        title="Add WorkSheet"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        <Worksheet></Worksheet>
        <p>This is the content of the first accordion item.</p>
      </AccordionItem>
      <AccordionItem
        title="WorkBook"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        <WorkingWorkSheets></WorkingWorkSheets>
      </AccordionItem>
      <AccordionItem
        title="Accordion Item 3"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        <p>This is the content of the third accordion item.</p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
