import React, { useState } from "react";

function Signup() {
  // use state variables
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pword, setPword] = useState("");
  const [mobile, setMobile] = useState("");

  // error states
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [pwordError, setPwordError] = useState("");
  const [mobileError, setMobileError] = useState("");

  // validate email
  function validateEmail(email) {
    const emailRegex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  }

  // input handlers
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePwordChange(event) {
    setPword(event.target.value);
  }
  function handleMobileChange(event) {
    setMobile(event.target.value);
  }

  function handleCreateAccount() {
    if (validateEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Email is not valid");
    }

    if (name.length < 3) {
      setNameError("Min 3 chars");
    } else {
      setNameError("");
    }

    if (pword.length >= 8) {
      setPwordError("");
    } else {
      setPwordError("Min 8 chars");
    }

    if (mobile.length === 10) {
      setMobileError("");
    } else {
      setMobileError("Mobile number is invalid");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3> CREATE ACCOUNT</h3>

          <div className="mb-3 mt-4">
            <label>EMAIL</label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="form-control"
              placeholder="Email"
            />
            <div className="text-danger">{emailError}</div>
          </div>

          <div className="mb-3">
            <label>NAME</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="form-control"
              placeholder="Name"
            />
            <div className="text-danger">{nameError}</div>
          </div>

          <div className="mb-3">
            <label>PASSWORD</label>
            <input
              type="password"
              value={pword}
              onChange={handlePwordChange}
              className="form-control"
              placeholder="Password"
            />
            <div className="text-danger">{pwordError}</div>
          </div>

          <div className="mb-3">
            <label>MOBILE</label>
            <input
              type="text"
              value={mobile}
              onChange={handleMobileChange}
              className="form-control"
              placeholder="Mobile"
            />
            <div className="text-danger">{mobileError}</div>
          </div>

          <div>
            <button className="btn btn-success" onClick={handleCreateAccount}>
              CREATE ACCOUNT
            </button>
          </div>

          <br />
          {name} <br />
          {email} <br />
          {pword} <br />
          {mobile}
        </div>
      </div>
    </div>
  );
}

export default Signup;

