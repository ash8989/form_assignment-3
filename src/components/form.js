import {useState} from "react";
import "../components_css/form.css";

    const Form = (props) => {
        const [name, setName] = useState("");
        const [department, setDepartment] = useState("");
        const [rating, setRating] = useState(0);
      
        const submitForm = (e) => {
          e.preventDefault();
          if (name.trim() && department.trim()) {
            props.employeeFeedbackDetails(name, department, rating);
            setName("");
            setDepartment("");
            setRating(0);
          }
        };

//   render() {
    return (
      <div>
          {/* {props.children} */}
        <form className="formClass" onSubmit={submitForm}>
          <div className="div1">
            <label>Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" id="name" className="nameInput" value={name} onChange={(e) => setName(e.target.value)}  required/>
          </div>
          <div className="div2">
            <label>Department :&nbsp;</label>
            <input type="text" id="name" className="departmentInput" value={department} onChange={(e) => setDepartment(e.target.value)} required />
          </div>
          <div className="div3">
            <label>Ratings :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="number"max="10" min="0" id="name" className="ratingInput" value={rating} onChange={(e) => setRating(e.target.value)} required placeholder="give rating between 1 to 10" />
          </div>
          <button type="submit" className="submitBtn">Submit</button>
        </form>
      </div>
    );
  }

export default Form;
