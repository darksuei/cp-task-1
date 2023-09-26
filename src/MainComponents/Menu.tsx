import "../index.css";

//Assets
import nt from "../assets/NT.png";
import menu from "../assets/menu.svg";
import home from "../assets/home.png";
import doc from "../assets/doc.png";

//Left Menu Component
export const Menu = () => {
  const handleNavClick = () => {
    alert("Not available yet");
  };
  return (
    <nav className="flex-col">
      <div id="main-icons">
        <img src={menu} alt="Menu" onClick={handleNavClick} />
        <div className="flex-col" id="icons-cat">
          <img src={home} alt="Home" onClick={handleNavClick} />
          <img src={doc} alt="Doc" onClick={handleNavClick} />
        </div>
      </div>
      <div className="absolute-mid nt-img-wrapper">
        <img src={nt} alt="NT" className="nt-img" />
      </div>
    </nav>
  );
};
