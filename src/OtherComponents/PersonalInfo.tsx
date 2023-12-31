import "../index.css";
import { useState, useEffect } from "react";

//Assets
import plus from "../assets/plus.png";
import pen from "../assets/pen.png";
import close from "../assets/close.png";
import { NewQuestion } from "./NewQuestion";
import { info } from "../constants";
import { infoDto, extraQuestionsDto } from "../Types";
import { initialPersonalValues } from "../constants";

const extraPersonalQuestions: extraQuestionsDto[] = [];

export const PersonalInfo = ({ setFormData }: any) => {
  const [allowEdit, setAllowEdit] = useState<boolean[]>(
    Array(extraPersonalQuestions.length).fill(false)
  );
  const [newQuestion, setNewQuestion] = useState(false);
  const [newFormDetails, setNewFormDetails] = useState({
    type: "",
    question: "",
  });
  const [prevFormData, setPrevFormData] = useState(initialPersonalValues);
  function handleNewQuestion() {
    setNewQuestion(!newQuestion);
  }
  useEffect(() => {
    if (newFormDetails.type !== "" && newFormDetails.question !== "") {
      extraPersonalQuestions.push(newFormDetails);
      setAllowEdit([...allowEdit, false]);
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

  const handleEditClick = (idx: number) => {
    const updatedAllowEdit = [...allowEdit];
    updatedAllowEdit[idx] = !updatedAllowEdit[idx];
    setAllowEdit(updatedAllowEdit);
  };

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
              {/* <input type={item.type} name={item.name} /> */}
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
                {allowEdit[idx] ? (
                  <span
                    className="close"
                    onClick={() => {
                      handleEditClick(idx);
                      extraPersonalQuestions.pop();
                    }}
                  >
                    <img src={close} alt="close" />
                    <span>Delete question</span>
                  </span>
                ) : (
                  <img
                    src={pen}
                    alt="Pen"
                    onClick={() => {
                      handleEditClick(idx);
                    }}
                  />
                )}
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
