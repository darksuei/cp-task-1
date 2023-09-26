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
const Additional = ({ formData, setFormData }: any) => {
  const [newQuestion, setNewQuestion] = useState(false);
  const [newFormDetails, setNewFormDetails] = useState({
    type: "",
    name: "",
    value: "",
    hasOptions: true,
  });
  function handleNewQuestion() {
    setNewQuestion(!newQuestion);
  }
  const handleChange = (e: any) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };
  return (
    <>
      <div>
        {questions.map((question, idx) => {
          return (
            <div className="question" key={idx}>
              <span className="question-type">{question.type}</span>
              <div className="question-value">
                {question.value}
                <img src={pen} alt="Pen" />
              </div>
            </div>
          );
        })}
        {newQuestion ? (
          <NewQuestion fn={handleNewQuestion} />
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
export default Additional;
