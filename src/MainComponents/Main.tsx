import "../index.css";
import { useState, useEffect } from "react";

//Components
import { BlockWrapper } from "../OtherComponents";
import { Upload } from "../OtherComponents";
import { PersonalInfo } from "../OtherComponents";
import { Profile } from "../OtherComponents";
import { Additional } from "../OtherComponents";

export const Main = () => {
  const [formData, setFormData] = useState<any>({
    data: {
      attributes: {
        personalInformation: {},
      },
    },
  });

  // FUNCTION TO FETCH DATA ATTRIBUTES FROM SERVER USING GET AS DESCRIBED IN THE YAML FILE
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_SERVER_URL);
      const data = await response.json();
      setFormData(data);
      console.log("Fetched: ", data);
    }
    fetchData();
  }, []);

  // SUBMIT FORM DATA TO SERVER USING PUT AS DESCRIBED IN THE YAML FILE
  async function handleSubmit() {
    console.log("Submitting..", formData);
    const response = await fetch(import.meta.env.VITE_SERVER_URL, {
      //Note that this project uses VITE to access env variables rather than REACT_APP
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      try {
        const data = await response.json();
        console.log("Submitted: ", data);
      } catch (error) {
        console.error(
          "Custom Error - Failed to parse response as JSON:",
          error
        );
      }
      window.location.reload();
    } else {
      console.error("Failed to submit:", response.statusText);
    }
  }

  return (
    <main>
      <BlockWrapper title="Upload cover image">
        <Upload formData={formData} setFormData={setFormData} />
      </BlockWrapper>

      <BlockWrapper title="Personal Information">
        <PersonalInfo formData={formData} setFormData={setFormData} />
      </BlockWrapper>
      <BlockWrapper title="Profile">
        <Profile formData={formData} setFormData={setFormData} />
      </BlockWrapper>
      <BlockWrapper title="Additional questions">
        <Additional formData={formData} setFormData={setFormData} />
      </BlockWrapper>
      <button
        style={{ width: 110 }}
        onClick={handleSubmit}
        id="main-submit-btn"
      >
        Save
      </button>
    </main>
  );
};
