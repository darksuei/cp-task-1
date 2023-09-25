import "../index.css";
import Save from "./Save";
import React, { useState } from "react";
import plus from "../assets/plus.png";

const NewQuestion = (props: { fn: Function }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [type, setType] = useState<string>("text");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    switch (selectedValue) {
      case "paragraph":
        setType("text");
        break;
      case "short":
        setType("text");
        break;
      case "yesorno":
        setType("yesorno");
        break;
      case "dropdown":
        setType("multiple");
        break;
      case "multiple":
        setType("multiple");
        break;
      case "date":
        setType("text");
        break;
      case "number":
        setType("text");
        break;
      case "file":
        setType("text");
        break;
      case "video":
        setType("video");
        break;
      default:
        break;
    }
  };

  return (
    <div className="new-question">
      <div className="new-question-option">
        <label htmlFor="type">Type</label>
        <select name="type" onChange={handleSelectChange}>
          <option value="paragraph">Paragraph</option>
          <option value="short">Short answer</option>
          <option value="yesorno">Yes/No</option>
          <option value="dropdown">Dropdown</option>
          <option value="multiple">Multiple Choice</option>
          <option value="date">Date</option>
          <option value="number">Number</option>
          <option value="file">File upload</option>
          <option value="video">Video question</option>
        </select>
      </div>
      <div className="new-question-option">
        <label htmlFor="question">Question</label>
        <input type="text" name="question" placeholder="Type here" />
        {(() => {
          switch (type) {
            case "multiple":
              return (
                <>
                  <label htmlFor="question">Choice</label>
                  <div className="choice">
                    <input type="text" name="choice" placeholder="Type here" />
                    <img src={plus} alt="plus" />
                  </div>
                  <span className="flex-row w-fit">
                    <input type="checkbox" className="checkbox" />
                    <span className="description">Enable "Other" option</span>
                  </span>
                </>
              );
            case "yesorno":
              return (
                <>
                  <span className="flex-row w-fit">
                    <input type="checkbox" className="checkbox" />
                    <span className="description">
                      Disqualify candidate if the answer is no
                    </span>
                  </span>
                </>
              );
            case "video":
              return (
                <>
                  <textarea name="video" placeholder="Type here"></textarea>
                  <span className="video-input-cat">
                    <input
                      type="text"
                      placeholder="Max duration of the video"
                    />
                    <select>
                      <option value="">In (sec/min)</option>
                      <option value="seconds">Seconds</option>
                      <option value="minutes">Minutes</option>
                    </select>
                  </span>
                </>
              );
            default:
              return <></>;
          }
        })()}
      </div>
      <Save size={90} fn={props.fn} />
    </div>
  );
};
export default NewQuestion;
