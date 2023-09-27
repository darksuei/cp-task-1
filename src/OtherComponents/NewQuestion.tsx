import "../index.css";
import plus from "../assets/plus.png";
import { Save } from "./Save";
import React, { useState, useRef } from "react";
import { initialNewForm } from "../constants";

export const NewQuestion = (props: any) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [newFormObj, setNewFormObj] = useState(initialNewForm);
  const [type, setType] = useState("Paragraph");
  const mcq = useRef<HTMLDivElement | null>(null);

  const createNewInput = () => {
    const newInput = document.createElement("div");
    newInput.className = "choice";
    newInput.innerHTML = `
      <input type="text" name="choice" placeholder="Type here" />
      <img src=${plus} alt="plus" class="plus-mcq"/>
    `;
    mcq.current?.appendChild(newInput);
    const plusImage = newInput.querySelector(".plus-mcq");
    plusImage!.addEventListener("click", createNewInput);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFormObj(() => {
      return {
        type: type,
        question: e.target.value,
      };
    });
  };

  const handleChoicesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFormObj((prev: any) => {
      return {
        ...prev,
        choices: {
          ...prev.choices,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    switch (selectedOption) {
      case "paragraph":
        setType("Paragraph");
        break;
      case "short":
        setType("ShortAnswer");
        break;
      case "yesorno":
        setType("YesNo");
        break;
      case "dropdown":
        setType("Dropdown");
        break;
      case "multiple":
        setType("MultipleChoice");
        break;
      case "date":
        setType("Date");
        break;
      case "number":
        setType("Number");
        break;
      case "file":
        setType("FileUpload");
        break;
      case "video":
        setType("FileUpload");
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
        <>
          <label htmlFor="question">Question</label>
          <input
            type="text"
            name="question"
            placeholder="Type here"
            onChange={handleQuestionChange}
          />
        </>
        {(() => {
          switch (type) {
            case "MultipleChoice":
            case "Dropdown":
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
                    name="maxChoice"
                    onChange={handleChoicesChange}
                    placeholder="Enter number of choices allowed here"
                  />
                </>
              );
            case "YesNo":
              return (
                <>
                  <span className="flex-row w-fit">
                    <input
                      type="checkbox"
                      name="disqualify"
                      className="checkbox"
                    />
                    <span className="description">
                      Disqualify candidate if the answer is no
                    </span>
                  </span>
                </>
              );
            case "FileUpload":
              return (
                <>
                  <textarea
                    name="video"
                    placeholder="More information here.."
                  ></textarea>
                  <span className="video-input-cat">
                    <input
                      type="text"
                      placeholder="Max duration of the video"
                    />
                    <select name="other">
                      <option value="">In (sec/min)</option>
                      <option value="seconds">Seconds</option>
                      <option value="minutes">Minutes</option>
                    </select>
                  </span>
                </>
              );
            default:
              break;
          }
        })()}
      </div>
      <Save
        size={90}
        fn={() => {
          props.fn();
        }}
        saveFn={() => {
          props.setNewFormDetails(newFormObj);
        }}
      />
    </div>
  );
};
