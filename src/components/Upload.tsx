import "../index.css";
import upload from "../assets/upload.png";
const Upload = () => {
  return (
    <div className="flex-col upload-main">
      <img src={upload} alt="upload" className="w-8" />
      <h2 className="mini-header">Upload cover image</h2>
      <p className="description">
        16:9 ratio is recommended. Max image size is 1mb.
      </p>
    </div>
  );
};
export default Upload;
