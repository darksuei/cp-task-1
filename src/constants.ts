import {
  extraQuestionsDto,
  infoDto,
  initialFormType,
  profileDto,
} from "./Types";

export const extraQuestions: extraQuestionsDto[] = [];

export const initialNewForm: initialFormType = {
  type: "",
  question: "",
};

export const info: infoDto[] = [
  {
    type: "text",
    name: "firstName",
    value: "First Name",
    hasOptions: false,
    options: {
      internalUse: false,
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

export const initialPersonalValues = {
  firstName: {
    internalUse: false,
    show: false,
  },
  lastName: {
    internalUse: false,
    show: false,
  },
  emailId: {
    internalUse: false,
    show: false,
  },
  phoneNumber: {
    internalUse: false,
    show: false,
  },
  nationality: {
    internalUse: false,
    show: false,
  },
  currentResidence: {
    internalUse: false,
    show: false,
  },
  idNumber: {
    internalUse: false,
    show: false,
  },
  dateOfBirth: {
    internalUse: false,
    show: false,
  },
  gender: {
    internalUse: false,
    show: false,
  },
};

export const profile: profileDto[] = [
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
