import "../components_css/displayFeedback.css";
import UserInput from "./UserInput";

const DisplayFeedback = (props) => {
  const { employeeFeedback } = props;

  // let style = null;
  // if (employeeFeedback.length) {
  //   style = { padding: "2rem 0" };
  // }

  return (
    <div className="mainContainer">
      <div className="displayFeedback">
        {employeeFeedback.map((feedback) => (
          <UserInput key={feedback.id} feedback={feedback} />
        ))}
      </div>
      <button onClick={props.display} className="goBackBtn">Go Back</button>
    </div>
  );
};

export default DisplayFeedback;
