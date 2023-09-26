import BlockWrapper from "./BlockWrapper";
import Upload from "./Upload";
import PersonalInfo from "./PersonalInfo";
import "../index.css";
import Profile from "./Profile";
import Additional from "./AdditiionalQ";
import { useState, useEffect } from "react";
import Save from "./Save";

const Main = () => {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
      <Save size={120} fn={() => {}} />
    </main>
  );
};
export default Main;
