import plus from "../assets/plus.png";
import pen from "../assets/pen.png";
import "../index.css";
import NewQuestion from "./NewQuestion";
import { useState, useEffect } from "react";
import { extraQuestionsDto } from "../Dto";

const extraProfileQuestions: extraQuestionsDto[] = [];
console.log(extraProfileQuestions.length);
const Additional = ({ formData, setFormData }: any) => {
  const [newQuestion, setNewQuestion] = useState(false);
  const [newFormDetails, setNewFormDetails] = useState({
    type: "",
    question: "",
  });
  function handleNewQuestion() {
    setNewQuestion(!newQuestion);
  }
  const handleChange = (e: any) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };
  useEffect(() => {
    if (newFormDetails.type !== "" && newFormDetails.question !== "") {
      extraProfileQuestions.push(newFormDetails);
    }
    setNewQuestion(false);
    setFormData((prevData: any) => ({
      data: {
        ...prevData.data,
        attributes: {
          ...prevData.data.attributes,
          customizedQuestions: extraProfileQuestions,
        },
      },
    }));
  }, [newFormDetails]);
  return (
    <>
      <div>
        {extraProfileQuestions &&
          extraProfileQuestions.map((question, idx) => {
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
export default Additional;
