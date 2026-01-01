import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img.png"; // adjust path if needed

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser?.email === loginData.email &&
      storedUser?.password === loginData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>

        {/* Login Form Header with Image */}
        <div className="text-center mb-3">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", marginBottom: "10px" }}
          />
          <h2>Login</h2>
        </div>

        <input
          className="form-control mb-2"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <button className="btn btn-success w-100 mb-2" onClick={handleLogin}>
          Login
        </button>

        <div className="text-center">
          <a href="/register" className="link">
            Create new account
          </a>
        </div>

      </div>
    </div>
  );
};

export default Login;
