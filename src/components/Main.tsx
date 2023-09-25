import BlockWrapper from "./BlockWrapper";
import Upload from "./Upload";
import PersonalInfo from "./PersonalInfo";
import "../index.css";
import Profile from "./Profile";
import Additional from "./AdditiionalQ";
import { UploadContext } from "../contexts/UploadContext";
import { useState } from "react";

const Main = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  return (
    <main>
      <UploadContext.Provider value={{ selectedImage, setSelectedImage }}>
        <BlockWrapper title="Upload cover image">
          <Upload />
        </BlockWrapper>
      </UploadContext.Provider>
      <BlockWrapper title="Personal Information">
        <PersonalInfo />
      </BlockWrapper>
      <BlockWrapper title="Profile">
        <Profile />
      </BlockWrapper>
      <BlockWrapper title="Additional questions">
        <Additional />
      </BlockWrapper>
    </main>
  );
};
export default Main;
