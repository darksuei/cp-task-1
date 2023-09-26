import "../index.css";
import upload from "../assets/upload.png";
import { useState, useRef } from "react";
import close from "../assets/close.png";

export const Upload = ({ formData, setFormData }: any) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setFormData((prevData: any) => ({
          data: {
            ...prevData.data,
            attributes: {
              ...prevData.data.attributes,
              coverImage: reader.result?.toString(),
            },
          },
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };
  function handleReupload() {
    setSelectedImage(null);
    setFormData((prevData: any) => ({
      data: {
        ...prevData.data,
        attributes: {
          ...prevData.data.attributes,
          coverImage: "",
        },
      },
    }));
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  }

  return (
    <>
      {selectedImage ? (
        <div className="img-wrapper">
          <img
            src={selectedImage.toString()}
            alt="Uploaded Image"
            className="uploaded-img"
          />
          <div className="close-img">
            <span
              className="close"
              onClick={() => {
                handleReupload();
              }}
            >
              <img src={close} alt="close" />
              <span>Delete &amp; re-upload</span>
            </span>
          </div>
        </div>
      ) : (
        <div className="flex-col upload-main">
          <input
            type="file"
            accept="image/*"
            ref={fileInput}
            onChange={handleImageUpload}
            className="hidden-input"
          />
          <img src={upload} alt="upload" className="w-8" />
          <h2 className="mini-header">Upload cover image</h2>
          <p className="description">
            16:9 ratio is recommended. Max image size is 1mb.
          </p>
        </div>
      )}
    </>
  );
};
