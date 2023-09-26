import plus from "../assets/plus.png";
import "../index.css";
import { useState } from "react";
import NewQuestion from "./NewQuestion";
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

const Profile = ({ formData, setFormData }: any) => {
  const [newQuestion, setNewQuestion] = useState(false);
  const [profileData, setProfileData] = useState<any>(initialValues);
  const [newFormDetails, setNewFormDetails] = useState({
    type: "",
    name: "",
    value: "",
    hasOptions: true,
  });
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
