import { useState } from "react";
import { portfolioData } from "../../utils/portfolioData";
import { AccordionItem } from "../AccordionItem";
import { portfolioDataType } from "../../utils/types";

type AccordionType = {
  data: portfolioDataType[];
};

export const Accordion: React.FunctionComponent<AccordionType> = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index: string) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="accordion">
      {portfolioData.map((portfolio, index) => (
        <AccordionItem
          key={index}
          active={clicked === index.toString()}
          data={portfolio}
          onToggle={() => handleToggle(index.toString())}
        />
      ))}
    </ul>
  );
};
