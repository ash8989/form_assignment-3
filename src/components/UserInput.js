import "../components_css/userInput.css";

const UserInput = (props) => {
  const { name, department, rating } = props.feedback;
  return (
    <p className="userInput">
      Name: {name} | Department: {department} | Rating: {rating}
    </p>
  );
};

export default UserInput;
