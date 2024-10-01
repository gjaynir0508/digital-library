import { useState } from "react";
import "./RegistrationForm.css";
// import "bootstrap/dist/css/bootstrap.css";
const RegistrationForm = () => {
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Form submitted:", { regNo, email, password, confirmPassword });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>My Book Shelf</h2>
        <h3>Registration</h3>
        <p>For Both Staff & Students</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="regNo">Reg No.</label>
            <input
              type="text"
              id="regNo"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">College Email ID</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already a User? <a href="#">Login now</a>
        </p>
        <p>
          User as <a href="#">Guest</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
