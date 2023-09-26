import "../index.css";
import { useState, useEffect } from "react";

//Assets
import plus from "../assets/plus.png";
import pen from "../assets/pen.png";
import { NewQuestion } from "./NewQuestion";
import { info } from "../constants";
import { infoDto, extraQuestionsDto } from "../Dto";
import { initialPersonalValues } from "../constants";

const extraPersonalQuestions: extraQuestionsDto[] = [];

export const PersonalInfo = ({ setFormData }: any) => {
  const [newQuestion, setNewQuestion] = useState(false);
  const [newFormDetails, setNewFormDetails] = useState({
    type: "",
    question: "",
  });
  const [prevFormData, setPrevFormData] = useState<any>(initialPersonalValues);
  function handleNewQuestion() {
    setNewQuestion(!newQuestion);
  }
  useEffect(() => {
    if (newFormDetails.type !== "" && newFormDetails.question !== "") {
      extraPersonalQuestions.push(newFormDetails);
    }
    setNewQuestion(false);
    setFormData((prevData: any) => ({
      data: {
        ...prevData.data,
        attributes: {
          ...prevData.data.attributes,
          personalInformation: {
            ...prevData.data.attributes.personalInformation,
            personalQuestions: extraPersonalQuestions,
          },
        },
      },
    }));
  }, [newFormDetails]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: infoDto
  ) => {
    const { name, checked } = e.target;
    setPrevFormData((prevPrevFormData: any) => ({
      ...prevPrevFormData,
      [item.name]: {
        ...prevPrevFormData[item.name],
        [name]: checked,
      },
    }));
    setFormData((prevData: any) => ({
      data: {
        ...prevData.data,
        attributes: {
          ...prevData.data.attributes,
          personalInformation: prevFormData,
        },
      },
    }));
  };
  return (
    <>
      <div className="personal-info flex-col">
        {info.map((item, idx) => {
          return (
            <div key={idx} className="form-container">
              <div className="form-label-wrapper">
                <label htmlFor={item.name} className="label">
                  {item.value}
                  {item.details && <span>{item.details}</span>}
                </label>
                {item.hasOptions && (
                  <span className="field-options">
                    <span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="internal"
                        onChange={(e) => handleChange(e, item)}
                      />
                      Internal
                    </span>
                    <span className="hide-wrapper flex-row">
                      <label className="toggle">
                        <input
                          type="checkbox"
                          id="toggleSwitch"
                          name="show"
                          onChange={(e) => handleChange(e, item)}
                        />
                        <span className="slider"></span>
                      </label>
                      <label htmlFor="toggleSwitch">Hide</label>
                    </span>
                  </span>
                )}
              </div>
              <input type={item.type} name={item.name} />
            </div>
          );
        })}
      </div>
      <div className="additional-questions">
        {extraPersonalQuestions.map((question, idx) => {
          return (
            <div className="question" key={idx}>
              <span className="question-type">{question.type}</span>
              <div className="question-value">
                {question.question}
                <img src={pen} alt="Pen" />
              </div>
            </div>
          );
        })}
      </div>
      {newQuestion ? (
        <NewQuestion
          fn={handleNewQuestion}
          newFormDetails={newFormDetails}
          setNewFormDetails={setNewFormDetails}
        />
      ) : (
        <div id="add-question" onClick={handleNewQuestion}>
          <img src={plus} />
          <span>Add a question</span>
        </div>
      )}
    </>
  );
};
export default PersonalInfo;
