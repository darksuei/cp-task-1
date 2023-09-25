import "../index.css";

const Nav = () => {
  return (
    <ul className="flex-row nav-tab">
      <li className="flex-row">Program Details</li>
      <li className="flex-row active">
        Application Form <span className="app-extension"></span>
      </li>
      <li className="flex-row border">Workflow</li>
      <li className="flex-row">Preview</li>
    </ul>
  );
};
export default Nav;
