import "../index.css";
import plus from "../assets/plus.png";
import pen from "../assets/pen.png";

//Components
import { NewQuestion } from "./NewQuestion";
import { useState, useEffect } from "react";
import { initialNewForm } from "../constants";
import { extraQuestionsDto } from "../Dto";

const extraAddQuestions: extraQuestionsDto[] = [];

export const Additional = ({ setFormData }: any) => {
  const [newQuestion, setNewQuestion] = useState(false);
  const [newFormDetails, setNewFormDetails] = useState(initialNewForm);
  const handleNewQuestion = () => {
    setNewQuestion(!newQuestion);
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
                  <img src={pen} alt="Pen" />
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
