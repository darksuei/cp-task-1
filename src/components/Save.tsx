import "../index.css";
import close from "../assets/close.png";

const Save = (props: { size: number; fn: Function; saveFn: Function }) => {
  return (
    <div className="btn-wrapper">
      <span
        className="close"
        onClick={() => {
          props.fn();
        }}
      >
        <img src={close} alt="close" />
        <span>Delete question</span>
      </span>
      <button
        style={{ width: props.size }}
        onClick={() => {
          props.saveFn();
        }}
      >
        Save
      </button>
    </div>
  );
};
export default Save;
