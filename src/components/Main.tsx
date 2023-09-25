import BlockWrapper from "./BlockWrapper";
import Upload from "./Upload";
import PersonalInfo from "./PersonalInfo";
import "../index.css";
import Profile from "./Profile";
import Additional from "./AdditiionalQ";
const Main = () => {
  return (
    <main>
      <BlockWrapper title="Upload cover image">
        <Upload />
      </BlockWrapper>
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
