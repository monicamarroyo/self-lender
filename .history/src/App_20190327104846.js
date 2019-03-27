import React, { Component } from "react";
import "./App.scss";
import robot from "./utils/GiantRobotLTD_Logo.svg";
import arrow from "./utils/White_Arrow.svg";
//px will remain 20px all throughtout sizing down
//em is equivalent to the computer font-size of parent element therefore you can specify the font-size there
//rem relative to html element so all element adhere to that
//lets you split up code into resuable components User Interface,
//we are defining a class
//component lifecycle Render Phase-pure has no side-effects. May be paused, aborted or restarted by react
//mounting updating unmounting
//we render in both mounting and updating to the browser
//in mounting we initialize the constructor
//in updating we set new props, setstate,force-update

//comit phase-can work with DOM, run slide effects, schedule updates
//react  updates in both mounting and updating
//componentDID mount Component DID update component will unMount
//class(props) it can take function properties use for declration or initizilation
class App extends Component { //class plain old javascript component
  //is called before mounted
  //constuctors are for inizilation local state, assinging to object this.state, bidning event handlers to method or instace
  constructor(props) {
    //this.props would be undefined- subclass this.state.fistName undefined throughout the component
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      addressOpt: "",
      firstNameError: "",
      lastNameError: "",
      addressError: ""
    };
  }
//function that handles first name change, takes in the event
  handleFirstNameChange = event => {
    //this works asynchronous way, therefore immidiately invoking this.validateFirstName 
    this.setState({ firstName: event.target.value }, () => {
      this.validateFirstName();
    });
  };
  handleLastNameChange = event => {
    //setState- changes the components state and tells React that this component and it's children need to be re-rendered with the updated state used primarly with event handlers and server responses** like request
    this.setState({ lastName: event.target.value }, () => {
      this.validateLastName();
    });
  };
  handleAddressChange = event => {
    this.setState({ address: event.target.value }, () => {
      this.validateAddress();
    });
  };
  handleAddressOptChange = event => {
    this.setState({ addressOpt: event.target.value });
  };
  validateFirstName = () => {
    const { firstName } = this.state;
    this.setState({
      firstNameError: firstName.length > 2 ? null : "Required"
    });
  };
  validateLastName = () => {
    const { lastName } = this.state;
    this.setState({
      //last> 2 if true return nothing else retrun required
      lastNameError: lastName.length > 2 ? null : "Required"
    });
  };
  validateAddress = () => {
    //destructing
    const { address } = this.state;
    this.setState({
      addressError: address.length > 2 ? null : "Required"
    });
  };

  handleSubmit = event => {
    //if the event does not get handled then default action should take place
    event.preventDefault();

    const {
      firstName,
      lastName,
      address,
      addressOpt,
      firstNameError,
      lastNameError,
      addressError
    } = this.state;
    if (
      firstNameError === "Required" ||
      lastNameError === "Required" ||
      addressError === "Required"
    ) {
      return;
    }
//es6 sytnax 
    alert(`The values submitted: \n
      first name : ${firstName} \n
      last name : ${lastName} \n
      address: ${address} \n
      address opt: ${addressOpt}
    `);
  };
//method is only required in class component, should eximine this.props, this.state
//returns react elements typicall JSX <div> that instruct react to render a Document Object Model node, or another user defined component
//arrays ans fragments reutnring fragments its like having multiple elements
//portals - modals, srtings and numbers, booleans or null
//render has to pure, it cant modify component state it returns same result each time invoked doesn't intreract with broswer- if u do then use compoennt did mounth
//no-gutters 
  render() {
    return (
      <div className="form">
        <div className="row no-gutters">
          <div className="col">
            <div className="form-left">
              <img className="form-left_img" alt="form robot" src={robot} />
              <p className="form-left_text-1">Welcome</p>
              <p className="form-left_text-2">
                Please tell us a bit about yourself to get started
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-right">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  //invalid feedback is boostrap clas that 
                  <div className="invalid-feedback form-display">
                    {this.state.firstNameError}
                  </div>

                  <input
                    name="firstName"
                    className={`form-control ${
                      //this.state.firstNmae is is-invalid
                      this.state.firstNameError ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    required
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                    onClick={this.validateFirstName}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <div className="invalid-feedback">
                    {this.state.lastNameError}
                  </div>
                  <input
                    name="lastName"
                    className={`form-control ${
                      this.state.lastNameError ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    required
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    onClick={this.validateLastName}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <div className="invalid-feedback">
                    {this.state.addressError}
                  </div>
                  <input
                    name="address"
                    className={`form-control ${
                      this.state.addressError ? "is-invalid" : ""
                    }`}
                    id="address"
                    required
                    value={this.state.address}
                    onChange={this.handleAddressChange}
                    onClick={this.validateAddress}
                  />
                </div>
                <div className="form-group">
                  <label>Address 2 (optional)</label>
                  <input
                    name="lastName"
                    className="form-control"
                    id="lastName"
                    value={this.state.addressOpt}
                    onChange={this.handleAddressOptChange}
                  />
                </div>
                <button className="btn" type="submit">
                  Next
                  <img
                    src={arrow}
                    alt="form arrow"
                    style={{ padding: "0rem .5rem" }}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
