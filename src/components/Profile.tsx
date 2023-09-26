import plus from "../assets/plus.png";
import "../index.css";
import { useEffect, useState } from "react";
import NewQuestion from "./NewQuestion";
import pen from "../assets/pen.png";
import { extraQuestionsDto } from "../Dto";
const profile: any = [
  {
    value: "Education",
    name: "education",
  },
  {
    value: "Experience",
    name: "experience",
  },
  {
    value: "Resume",
    name: "resume",
  },
];

const extraProfileQuestions: extraQuestionsDto[] = [];

const Profile = ({ formData, setFormData }: any) => {
  const [newQuestion, setNewQuestion] = useState(false);
  const [profileData, setProfileData] = useState<any>(initialValues);
  const [newFormDetails, setNewFormDetails] = useState({
    type: "",
    question: "",
  });
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
          profile: {
            ...prevData.data.attributes.profile,
            profileQuestions: extraProfileQuestions,
          },
        },
      },
    }));
  }, [newFormDetails]);
  function handleNewQuestion() {
    setNewQuestion(!newQuestion);
  }
  const handleChange = (e: any, item: any) => {
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
      {profile.map((item: any, idx: number) => {
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
            <input type="text" name={item} />
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
    </div>
  );
};

export default Profile;

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
