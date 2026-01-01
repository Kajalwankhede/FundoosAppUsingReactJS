import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registered Successfully");
    navigate("/login");
  };

 return (
  <div className="container">
    <h2>Register</h2>

    <input
      className="form-control"
      placeholder="Name"
      name="name"
      onChange={handleChange}
    />

    <input
      className="form-control"
      placeholder="Email"
      name="email"
      onChange={handleChange}
    />

    <input
      type="password"
      className="form-control"
      placeholder="Password"
      name="password"
      onChange={handleChange}
    />

    <button className="btn btn-primary" onClick={handleRegister}>
      Register
    </button>

    <a href="/login" className="link">Already have an account? Login</a>
  </div>
);

};

export default Register;
