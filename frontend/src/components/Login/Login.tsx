import { useState } from "react";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Form submitted:", { email, password });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>My Book Shelf</h2>
        <h3>Welcome Back!</h3>
        <p>Sign in to access DigitalLibrary</p>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account,<a href="#">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
