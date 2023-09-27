import "../index.css";
import plus from "../assets/plus.png";
import pen from "../assets/pen.png";
import close from "../assets/close.png";

//Components
import { NewQuestion } from "./NewQuestion";
import { useState, useEffect } from "react";
import { initialNewForm } from "../constants";
import { extraQuestionsDto } from "../Types";

const extraAddQuestions: extraQuestionsDto[] = [];

export const Additional = ({ setFormData }: any) => {
  const [allowEdit, setAllowEdit] = useState<boolean[]>(
    Array(extraAddQuestions.length).fill(false)
  );
  const [newQuestion, setNewQuestion] = useState(false);
  const [newFormDetails, setNewFormDetails] = useState(initialNewForm);
  const handleNewQuestion = () => {
    setNewQuestion(!newQuestion);
  };

  const handleEditClick = (idx: number) => {
    const updatedAllowEdit = [...allowEdit];
    updatedAllowEdit[idx] = !updatedAllowEdit[idx];
    setAllowEdit(updatedAllowEdit);
  };

  useEffect(() => {
    if (newFormDetails.type !== "" && newFormDetails.question !== "") {
      extraAddQuestions.push(newFormDetails);
    }
    setNewQuestion(false);
    setFormData((prevData: any) => ({
      data: {
        ...prevData.data,
        attributes: {
          ...prevData.data.attributes,
          customisedQuestions: [
            // ...prevData.data.attributes.customisedQuestions,
            ...extraAddQuestions,
          ],
        },
      },
    }));
  }, [newFormDetails]);

  return (
    <>
      <div>
        {extraAddQuestions &&
          extraAddQuestions.map((question, idx) => {
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
                        extraAddQuestions.pop();
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
    </>
  );
};
