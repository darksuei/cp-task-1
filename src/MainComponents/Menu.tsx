import "../index.css";

//Assets
import nt from "../assets/NT.png";
import menu from "../assets/menu.svg";
import home from "../assets/home.png";
import doc from "../assets/doc.png";

//Left Menu Component
export const Menu = () => {
  return (
    <nav className="flex-col">
      <div id="main-icons">
        <img src={menu} alt="Menu" />
        <div className="flex-col" id="icons-cat">
          <img src={home} alt="Home" />
          <img src={doc} alt="Doc" />
        </div>
      </div>
      <div className="absolute-mid" style={NTStyle}>
        <img src={nt} alt="NT" style={{ width: "20px" }} />
      </div>
    </nav>
  );
};
const NTStyle: React.CSSProperties = {
  backgroundColor: "rgb(59 130 246)",
  padding: "8px",
  borderRadius: "50%",
  height: "fit-content",
};
