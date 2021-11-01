import React from "react";
import "./App.css";
// import './components_css/form.css';
import { Component } from "react";
import Form from "./components/form";
import DisplayFeedback from "./components/DisplayFeedback";

class App extends Component {
  state = {
    employeeFeedback: [],
    isDisplay: false,
  };
  employeeFeedbackDetails(name, department, rating) {
    const { employeeFeedback } = this.state;
    const id = employeeFeedback.length + 1;
    const feedback = { id, name, department, rating };

    employeeFeedback.push(feedback);

    this.setState({ employeeFeedback });
    this.display();
  }

  display = () => {
    const isDisplay = !this.state.isDisplay;
    this.setState({ isDisplay });
  }

  render() {
    return (
      <div>
        <h1 className="header">Employee Feedback {this.state.isDisplay ? "Data" : "Form"}</h1>

        {this.state.isDisplay ? (
          <DisplayFeedback employeeFeedback={this.state.employeeFeedback} display={this.display} />
        ) : (
          <Form employeeFeedbackDetails={this.employeeFeedbackDetails.bind(this)}></Form>
        )}
      </div>
    );
  }
}

export default App;
