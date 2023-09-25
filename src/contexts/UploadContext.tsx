import { createContext } from "react";

export const UploadContext = createContext<UploadContextDto | null>(null);

interface UploadContextDto {
  selectedImage: string;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}
