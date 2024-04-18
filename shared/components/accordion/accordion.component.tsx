"use client";

import { useState } from "react";

export interface AccordionProps {
  title: string;
  content: string;
}

export const Accordion = ({ title, content }: AccordionProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="cursor-pointer bg-[#F4F4F4] rounded-2xl"
      onClick={toggleExpanded}
    >
      <div className="flex items-center justify-between w-full p-4 rounded-2xl px-4">
        <h5 className="font-medium">{title}</h5>
        <div>
          <div className="rounded-full bg-[#229ED9] h-8 w-8"></div>
        </div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-all ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-4 mt-4 text-left text-sm">{content}</p>
      </div>
    </div>
  );
};
