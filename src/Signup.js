import React, { useState } from "react";

function Signup() {
  // use state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
  const [mobile, setMobile] = useState("");

  function handleNamechange(event) {
    setName(event.target.value);
  }
  function handleEmailchange(event) {
    setEmail(event.target.value);
  }
  function handlePwordchange(event) {
    setPword(event.target.value);
  }
  function handleMobilechange(event) {
    setMobile(event.target.value);
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
              onChange={handleEmailchange}
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="mb-3">
            <label>NAME</label>
            <input
              type="text"
              onChange={handleNamechange}
              className="form-control"
              placeholder="Name"
            />
          </div>

          <div className="mb-3">
            <label>PASSWORD</label>
            <input
              type="password"
              onChange={handlePwordchange}
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="mb-3">
            <label>MOBILE</label>
            <input
              type="text"
              onChange={handleMobilechange}
              className="form-control"
              placeholder="Mobile"
            />
          </div>

          <div>
            <button className="btn btn-success">CREATE ACCOUNT</button>
          </div>

         {
          name
         }
          <br/>
         {
          email
         }
         <br/>
         {
           pword
         }
          <br/>
         {
          mobile
         }
        </div>
      </div>
    </div>
  );
}

export default Signup;
