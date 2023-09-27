import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders the application form", () => {
    render(<App />);
    const applicationFormElement = screen.getAllByText(/Application Form/i)[0];
    expect(applicationFormElement).toBeInTheDocument();
  });

  test("renders the image section", () => {
    render(<App />);
    const breadcrumbElement = screen.getAllByText(/Cover Image/i)[0];
    expect(breadcrumbElement).toBeInTheDocument();
  });

  test("renders the personal information section", () => {
    render(<App />);
    const personalInfoElement = screen.getAllByText(/Personal Information/i)[0];
    expect(personalInfoElement).toBeInTheDocument();
  });

  test("renders the additional questions section", () => {
    render(<App />);
    const profilePicElement = screen.getAllByText(/Additional Questions/i)[0];
    expect(profilePicElement).toBeInTheDocument();
  });
});
