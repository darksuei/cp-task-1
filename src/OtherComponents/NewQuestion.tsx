import "../index.css";
import plus from "../assets/plus.png";
import close from "../assets/close.png";
import { Save } from "./Save";
import React, { useState, useRef, useEffect } from "react";
import { initialNewForm } from "../constants";

export const NewQuestion = (props: any) => {
  const [newFormObj, setNewFormObj] = useState(initialNewForm);
  const [type, setType] = useState("");
  const mcq = useRef<HTMLDivElement | null>(null);
  const choiceRef = useRef<HTMLInputElement | null>(null);

  const createNewInput = (val: string) => {
    const newInput = document.createElement("div");
    newInput.className = "choice";
    newInput.innerHTML = `
      <span>${val}</span>
      <img src=${close} alt="close" class="close"/>
    `;
    mcq.current?.insertBefore(newInput, mcq.current?.lastChild);
    const closeImage = newInput.querySelector(".close");
    closeImage?.addEventListener("click", () => {
      mcq.current?.removeChild(newInput);
      setNewFormObj((prev: any) => {
        return {
          ...prev,
          choices: prev.choices.filter((choice: string) => choice !== val),
        };
      });
    });
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFormObj((prev: any) => {
      return {
        ...prev,
        type: type,
        question: e.target.value,
      };
    });
  };

  const handlechoiceOptions = () => {
    if (choiceRef.current?.value !== "") {
      setNewFormObj((prev: any) => {
        return {
          ...prev,
          choices: [...(prev.choices ?? []), choiceRef.current!.value],
        };
      });
      createNewInput(choiceRef.current!.value);
      choiceRef.current!.value = "";
    }
  };

  const handleChoicesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFormObj((prev: any) => {
      console.log(prev);
      let value: string | number | boolean = e.target.value;
      if (e.target.name === "maxChoice") {
        value = Number(value);
      } else if (e.target.name === "other" || e.target.name === "disqualify") {
        value = e.target.checked;
      }
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };

  useEffect(() => {
    setType(() => "Paragraph");
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "paragraph":
        setType(() => "Paragraph");
        break;
      case "short":
        setType(() => "ShortAnswer");
        break;
      case "yesorno":
        setType(() => "YesNo");
        break;
      case "dropdown":
        setType(() => "Dropdown");
        break;
      case "multiple":
        setType(() => "MultipleChoice");
        break;
      case "date":
        setType(() => "Date");
        break;
      case "number":
        setType(() => "Number");
        break;
      case "file":
        setType(() => "FileUpload");
        break;
      case "video":
        setType(() => "FileUpload");
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
              return (
                <>
                  <label htmlFor="question">Choice</label>
                  <div className="mcq-input-wrapper" ref={mcq}>
                    <div className="choice">
                      <input
                        type="text"
                        name="choice"
                        placeholder="Type here"
                        ref={choiceRef}
                      />
                      <img
                        src={plus}
                        alt="plus"
                        className="plus-mcq"
                        onClick={handlechoiceOptions}
                      />
                    </div>
                  </div>
                  <span className="flex-row w-fit">
                    <input
                      type="checkbox"
                      name="other"
                      className="checkbox"
                      onChange={handleChoicesChange}
                    />
                    <span className="description">Enable "Other" option</span>
                  </span>
                  <label htmlFor="max-choice">Max choice allowed</label>
                  <input
                    type="number"
                    name="maxChoice"
                    onChange={handleChoicesChange}
                    placeholder="Enter number of choices allowed here"
                  />
                </>
              );
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
                        ref={choiceRef}
                      />
                      <img
                        src={plus}
                        alt="plus"
                        className="plus-mcq"
                        onClick={handlechoiceOptions}
                      />
                    </div>
                  </div>
                  <span className="flex-row w-fit">
                    <input
                      type="checkbox"
                      name="other"
                      className="checkbox"
                      onChange={handleChoicesChange}
                    />
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
                      onChange={handleChoicesChange}
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
          props.setNewFormDetails(() => newFormObj);
        }}
      />
    </div>
  );
};
