import { RefObject, useRef, useState } from "react";
import "./AccordionItem.css";
import { useDarkMode } from "src/ThemeHandler";

type AccordionItemProps = {
  key: number;
  data: any;
  onToggle: () => void;
  active: boolean;
};

export const AccordionItem: React.FunctionComponent<AccordionItemProps> = ({
  key,
  data,
  onToggle,
  active,
}) => {
  const [clicked, setClicked] = useState(false);
  const { question, answer } = data;
  const contentEl = useRef() as RefObject<HTMLDivElement>;
  const { darkMode } = useDarkMode();

  const handleToggle = () => {
    setClicked((clicked) => !clicked);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {question}
        <span className="control">{clicked ? "–" : "+"}</span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }>
        <div className={darkMode ? "answer-dark" : "answer-light"}>
          {answer}
        </div>
      </div>
    </li>
  );
};
