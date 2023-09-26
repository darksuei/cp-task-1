import "../index.css";
import React, { useEffect, useState } from "react";

//Assets
import plus from "../assets/plus.png";
import pen from "../assets/pen.png";
import close from "../assets/close.png";
import { NewQuestion } from "./NewQuestion";
import { extraQuestionsDto, profileDto } from "../Dto";
import { initialNewForm, profile } from "../constants";

const extraProfileQuestions: extraQuestionsDto[] = [];

export const Profile = ({ setFormData }: any) => {
  const [allowEdit, setAllowEdit] = useState<boolean[]>(
    Array(extraProfileQuestions.length).fill(false)
  );
  const [newQuestion, setNewQuestion] = useState(false);
  const [profileData, setProfileData] = useState<any>(initialValues);
  const [newFormDetails, setNewFormDetails] = useState(initialNewForm);

  const handleEditClick = (idx: number) => {
    const updatedAllowEdit = [...allowEdit];
    updatedAllowEdit[idx] = !updatedAllowEdit[idx];
    setAllowEdit(updatedAllowEdit);
  };

  useEffect(() => {
    if (newFormDetails.type !== "" && newFormDetails.question !== "") {
      extraProfileQuestions.push(newFormDetails);
      setAllowEdit([...allowEdit, false]);
    }
    setNewQuestion(false);
    setFormData((prevData: any) => ({
      data: {
        ...prevData.data,
        attributes: {
          ...prevData.data.attributes,
          profile: {
            ...prevData.data.attributes.profile,
            profileQuestions: extraProfileQuestions,
          },
        },
      },
    }));
  }, [newFormDetails]);

  const handleNewQuestion = () => {
    setNewQuestion(!newQuestion);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: profileDto
  ) => {
    const { name, checked } = e.target;
    setProfileData((prevPrevFormData: any) => ({
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
          profile: profileData,
        },
      },
    }));
  };
  return (
    <div>
      {profile.map((item, idx: number) => {
        return (
          <div key={idx} className="form-container">
            <div className="form-label-wrapper">
              <label htmlFor={item.value} className="label">
                {item.value}
              </label>
              <span className="field-options">
                <span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="mandatory"
                    onChange={(e) => handleChange(e, item)}
                  />
                  Mandatory
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
            </div>
            {/* <input type="text" name={"text"} /> */}
          </div>
        );
      })}
      <div className="additional-questions">
        {extraProfileQuestions.map((question, idx) => {
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
                      extraProfileQuestions.pop();
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
    </div>
  );
};

const initialValues = {
  education: {
    mandatory: true,
    show: true,
  },
  experience: {
    mandatory: true,
    show: true,
  },
  resume: {
    mandatory: true,
    show: true,
  },
};
