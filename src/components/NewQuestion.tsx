import "../index.css";
import Save from "./Save";
const NewQuestion = (props: { fn: Function }) => {
  return (
    <div className="new-question">
      <div className="new-question-option">
        <label htmlFor="type">Type</label>
        <select name="type">
          <option value="paragraph">Paragraph</option>
          <option value="short">Short answer</option>
          <option value="yesorno">Yes/No</option>
          <option value="dropdown">Dropdown</option>
          <option value="multiple">Multiple Choice</option>
          <option value="date">Date</option>
          <option value="number">Number</option>
          <option value="file">File upload</option>
          <option value="video">Video question</option>
        </select>
      </div>
      <div className="new-question-option">
        <label htmlFor="question">Question</label>
        <input type="text" name="question" placeholder="Question" />
      </div>
      <Save size={90} fn={props.fn} />
    </div>
  );
};
export default NewQuestion;
