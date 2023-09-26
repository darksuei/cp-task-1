import "../index.css";

//Top Navigation
export const Nav = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    alert("Not available yet");
  };
  return (
    <ul className="flex-row nav-tab">
      <li className="flex-row" onClick={handleNavClick}>
        Program Details
      </li>
      <li className="flex-row active">
        <span className="high-z-index">Application Form</span>{" "}
        <span className="app-extension"></span>
      </li>
      <li className="flex-row border" onClick={handleNavClick}>
        Workflow
      </li>
      <li className="flex-row" onClick={handleNavClick}>
        Preview
      </li>
    </ul>
  );
};
