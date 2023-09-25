import "../index.css";
import plus from "../assets/plus.png";
import { useState } from "react";
import NewQuestion from "./NewQuestion";

const PersonalInfo = () => {
  const [newQuestion, setNewQuestion] = useState(false);
  function handleNewQuestion() {
    setNewQuestion(!newQuestion);
  }
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
                      <input type="checkbox" className="checkbox" />
                      Internal
                    </span>
                    <span className="hide-wrapper flex-row">
                      <label className="toggle">
                        <input type="checkbox" id="toggleSwitch" />
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
      {newQuestion && <NewQuestion fn={handleNewQuestion} />}
      <div id="add-question" onClick={handleNewQuestion}>
        <img src={plus} />
        <span>Add a question</span>
      </div>
    </>
  );
};
export default PersonalInfo;

interface infoDto {
  type: string;
  name: string;
  value: string;
  hasOptions: boolean;
  details?: string;
}
const info: infoDto[] = [
  {
    type: "text",
    name: "firstName",
    value: "First Name",
    hasOptions: false,
  },
  {
    type: "text",
    name: "lastName",
    value: "Last Name",
    hasOptions: false,
  },
  {
    type: "email",
    name: "email",
    value: "Email",
    hasOptions: false,
  },
  {
    type: "tel",
    name: "phone",
    value: `Phone`,
    details: " (without dial code)",
    hasOptions: true,
  },
  {
    type: "text",
    name: "nationality",
    value: "Nationality",
    hasOptions: true,
  },
  {
    type: "residence",
    name: "text",
    value: "Current Residence",
    hasOptions: true,
  },
  {
    type: "text",
    name: "id",
    value: "ID Number",
    hasOptions: true,
  },
  {
    type: "text",
    name: "dob",
    value: "Date of Birth",
    hasOptions: true,
  },
  {
    type: "text",
    name: "gender",
    value: "Gender",
    hasOptions: true,
  },
];
