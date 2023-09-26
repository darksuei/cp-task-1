import "../index.css";
import plus from "../assets/plus.png";
import { useState } from "react";
import NewQuestion from "./NewQuestion";

const PersonalInfo = ({ formData, setFormData }: any) => {
  const [newQuestion, setNewQuestion] = useState(false);
  const [newFormDetails, setNewFormDetails] = useState({
    type: "",
    name: "",
    value: "",
    hasOptions: true,
  });
  const [prevFormData, setPrevFormData] = useState<any>(initialValues);
  function handleNewQuestion() {
    setNewQuestion(!newQuestion);
  }
  const handleChange = (e: any, item: any) => {
    const { name, checked } = e.target;
    setPrevFormData((prevPrevFormData: any) => ({
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
          personalInformation: prevFormData,
        },
      },
    }));
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
                        name={"internal"}
                        onChange={(e) => handleChange(e, item)}
                      />
                      Internal
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
  options?: {
    internal: boolean;
    show: boolean;
  };
}
const initialValues = {
  firstName: {
    internal: false,
    show: false,
  },
  lastName: {
    internal: false,
    show: false,
  },
  emailId: {
    internal: false,
    show: false,
  },
  phoneNumber: {
    internal: false,
    show: false,
  },
  nationality: {
    internal: false,
    show: false,
  },
  currentResidence: {
    internal: false,
    show: false,
  },
  idNumber: {
    internal: false,
    show: false,
  },
  dob: {
    internal: false,
    show: false,
  },
  gender: {
    internal: false,
    show: false,
  },
};
const info: infoDto[] = [
  {
    type: "text",
    name: "firstName",
    value: "First Name",
    hasOptions: false,
    options: {
      internal: false,
      show: false,
    },
  },
  {
    type: "text",
    name: "lastName",
    value: "Last Name",
    hasOptions: false,
  },
  {
    type: "email",
    name: "emailId",
    value: "Email",
    hasOptions: false,
  },
  {
    type: "tel",
    name: "phoneNumber",
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
    name: "currentResidence",
    value: "Current Residence",
    hasOptions: true,
  },
  {
    type: "text",
    name: "idNumber",
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
