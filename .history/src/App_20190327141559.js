import React, { Component } from "react";
import "./App.scss";
import robot from "./utils/GiantRobotLTD_Logo.svg";
import arrow from "./utils/White_Arrow.svg";

class App extends Component { //class plain old javascript component
  
  constructor(props) {
    
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      addressOpt: "",
      firstNameError: "",
      lastNameError: "",
      addressError: "",
      phoneNumber: ""
    };
  }
//function that handles first name change, takes in the event
  handleFirstNameChange = event => {
    
    this.setState({ firstName: event.target.value }, () => {
      this.validateFirstName();
    });
  };
  handleLastNameChange = event => {
    
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
  handlePhoneNumber = event => {  
    //this.setState({phoneNumber: event.target.value})
    
    let numbers = event.target.value.replace(/[^\d]/g,'');
    numbers = "(" + numbers.slice(0,1) + numbers.slice(0,2) + ") " + numbers.slice(3,6)+ "-" + numbers.slice(6);
    //event.target.value=numbers;
    
    console.log(numbers);
      
  }
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
                   
                  <div className="invalid-feedback form-display">
                    {this.state.firstNameError}
                  </div>

                  <input
                    name="firstName"
                    className={`form-control ${
                      //this.state.firstNmae is is-invalid, else display nothing
                      this.state.firstNameError ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    required
                    value={this.state.firstName}
                    //
                    onChange={this.handleFirstNameChange}
                    //
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
                <div className="form-group">
                <label>Phone number</label>
                <input
                name="phoneNumber"
                className="form-control"
                id="phoneNumber"
                value={this.state.phone}
                onChange={this.handlePhoneNumber}
                >
                </input>

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
