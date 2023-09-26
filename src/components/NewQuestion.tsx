import "../index.css";
import Save from "./Save";
import React, { useState, useRef } from "react";
import plus from "../assets/plus.png";

const NewQuestion = (props: any) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [newFormObj, setNewFormObj] = useState<any>({
    type: "",
    question: "",
  });
  const [type, setType] = useState<string>("paragraph");
  const mcq = useRef<HTMLDivElement | null>(null);

  const createNewInput = () => {
    const newInput = document.createElement("div");
    newInput.className = "choice";
    newInput.innerHTML = `
      <input type="text" name="choice" placeholder="Type here" />
      <img src=${plus} alt="plus" className="plus-mcq" onClick={createNewInput}/>
    `;
    mcq.current?.insertBefore(newInput, mcq.current.lastChild);
  };
  function handleQuestionChange(e: any) {
    setNewFormObj((prev: any) => {
      return {
        type: type,
        question: e.target.value,
      };
    });
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    switch (selectedValue) {
      case "paragraph":
        setType("paragraph");
        break;
      case "short":
        setType("short");
        break;
      case "yesorno":
        setType("yesorno");
        break;
      case "dropdown":
        setType("dropdown");
        break;
      case "multiple":
        setType("multiple");
        break;
      case "date":
        setType("date");
        break;
      case "number":
        setType("number");
        break;
      case "file":
        setType("file");
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
        <input
          type="text"
          name="question"
          placeholder="Type here"
          onChange={handleQuestionChange}
        />
        {(() => {
          switch (type) {
            case "multiple":
              return (
                <>
                  <label htmlFor="question">Choice</label>
                  <div className="mcq-input-wrapper" ref={mcq}>
                    <div className="choice">
                      <input
                        type="text"
                        name="choice"
                        placeholder="Type here"
                      />
                      <img
                        src={plus}
                        alt="plus"
                        className="plus-mcq"
                        onClick={createNewInput}
                      />
                    </div>
                  </div>
                  <span className="flex-row w-fit">
                    <input type="checkbox" className="checkbox" />
                    <span className="description">Enable "Other" option</span>
                  </span>
                  <label htmlFor="max-choice">Max choice allowed</label>
                  <input
                    type="text"
                    name="max-choice"
                    placeholder="Enter number of choices allowed here"
                  />
                </>
              );
            case "dropdown":
              return (
                <>
                  <label htmlFor="question">Choice</label>
                  <div className="mcq-input-wrapper" ref={mcq}>
                    <div className="choice">
                      <input
                        type="text"
                        name="choice"
                        placeholder="Type here"
                      />
                      <img
                        src={plus}
                        alt="plus"
                        className="plus-mcq"
                        onClick={createNewInput}
                      />
                    </div>
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
      <Save
        size={90}
        fn={() => {
          props.fn();
        }}
        saveFn={() => {
          console.log(newFormObj);
          props.setNewFormDetails(newFormObj);
        }}
      />
    </div>
  );
};
export default NewQuestion;
