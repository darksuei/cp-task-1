import plus from "../assets/plus.png";
import "../index.css";
import { useState } from "react";
import NewQuestion from "./NewQuestion";
const profile: string[] = ["Education", "Experience", "Resume"];

const Profile = ({ formData, setFormData }: any) => {
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
    <div>
      {profile.map((item, idx) => {
        return (
          <div key={idx} className="form-container">
            <div className="form-label-wrapper">
              <label htmlFor={item} className="label">
                {item}
              </label>
              <span className="field-options">
                <span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name=""
                    onChange={handleChange}
                  />
                  Internal
                </span>
                <span className="hide-wrapper flex-row">
                  <label className="toggle">
                    <input
                      type="checkbox"
                      id="toggleSwitch"
                      name=""
                      onChange={handleChange}
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
      {newQuestion ? (
        <NewQuestion fn={handleNewQuestion} />
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
