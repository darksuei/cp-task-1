import plus from "../assets/plus.png";
import pen from "../assets/pen.png";
import "../index.css";
import NewQuestion from "./NewQuestion";
import { useState } from "react";
const questions = [
  {
    type: "Paragraph",
    value: "Please tell me about yourself in less than 500 words",
  },
  {
    type: "Dropdown",
    value: "Please select the year of graduadion from the list below",
  },
];
const Additional = () => {
  const [newQuestion, setNewQuestion] = useState(false);
  function handleNewQuestion() {
    setNewQuestion(!newQuestion);
  }
  return (
    <>
      <div>
        {questions.map((question) => {
          return (
            <div className="question">
              <span className="question-type">{question.type}</span>
              <div className="question-value">
                {question.value}
                <img src={pen} alt="Pen" />
              </div>
            </div>
          );
        })}
        {newQuestion && <NewQuestion fn={handleNewQuestion} />}
        <div id="add-question" onClick={handleNewQuestion}>
          <img src={plus} />
          <span>Add a question</span>
        </div>
      </div>
    </>
  );
};
export default Additional;
