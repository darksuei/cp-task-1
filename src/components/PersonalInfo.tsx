import "../index.css";
import plus from "../assets/plus.png";
import { useState, useEffect } from "react";
import NewQuestion from "./NewQuestion";

const PersonalInfo = ({ formData, setFormData }: any) => {
  const [newQuestion, setNewQuestion] = useState(false);
  const [personalFormObj, setPersonalFormObj] = useState<any>([]);
  const [newFormDetails, setNewFormDetails] = useState({
    type: "",
    name: "",
    value: "",
    hasOptions: true,
  });
  useEffect(() => {
    setFormData([...formData, newFormDetails]);
  }, [newFormDetails]);
  function handleNewQuestion() {
    setNewQuestion(!newQuestion);
  }
  const handleChange = (e: any) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
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
                )}
              </div>
              <input type={item.type} name={item.name} />
            </div>
          );
        })}
      </div>
      {newQuestion ? (
        <NewQuestion
          fn={handleNewQuestion}
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

interface infoDto {
  type: string;
  name: string;
  value: string;
  hasOptions: boolean;
  details?: string;
}
const initialValues = {
  firstName: "",
  lastName: "",
  emailId: "",
  phoneNumber: "",
  nationality: "",
  currentResidence: "",
  idNumber: "",
  dob: "",
  gender: "",
};
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
