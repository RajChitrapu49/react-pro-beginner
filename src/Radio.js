import React, { useState } from "react";

function Signup() {
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);

  function handleCountryChange(event) {
    setCountry(event.target.value);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleInterestChange(event) {
    const value = event.target.value;
    if (interests.includes(value)) {
      // remove if already selected
      setInterests(interests.filter((i) => i !== value));
    } else {
      // add new
      setInterests([...interests, value]);
    }
  }

  return (
    <div className="container mt-4">
      <h3>Create Account</h3>

      {/* Country Dropdown */}
      <div className="mb-3">
        <label>Country</label>
        <select
          className="form-control"
          value={country}
          onChange={handleCountryChange}
        >
          <option value="">-- Select Country --</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
      </div>

      {/* Gender Radio */}
      <div className="mb-3">
        <label>Gender</label> <br />
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleGenderChange}
        /> Male
        <br />
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleGenderChange}
        /> Female
        <br />
        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={handleGenderChange}
        /> Other
      </div>

      {/* Interests Checkboxes */}
      <div className="mb-3">
        <label>Interests</label> <br />
        <input
          type="checkbox"
          value="Sports"
          onChange={handleInterestChange}
        /> Sports
        <br />
        <input
          type="checkbox"
          value="Music"
          onChange={handleInterestChange}
        /> Music
        <br />
        <input
          type="checkbox"
          value="Travel"
          onChange={handleInterestChange}
        /> Travel
        <br />
        <input
          type="checkbox"
          value="Movies"
          onChange={handleInterestChange}
        /> Movies
        <br />
        <input
          type="checkbox"
          value="Reading"
          onChange={handleInterestChange}
        /> Reading
      </div>

      {/* Display selections */}
      <div className="mt-4">
        <h5>Selected Details:</h5>
        <p><strong>Country:</strong> {country}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Interests:</strong> {interests.join(", ")}</p>
      </div>
    </div>
  );
}

export default Signup;
