import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

function Login() {
    const [credentials, setCredentials] = useState({
      username: "",
      password: "",
    });
    let history = useHistory();
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      axiosWithAuth()
        .post("api/login", credentials)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
  
          history.push("/friends");
          console.log(res.data);
        })
        .catch((err) => console.log(err.response.data.error));
    };
  
    const handleChange = (e) => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      });
    };
    return (
      <div>
        <form
          onSubmit={handleLogin}
          style={{
            textAlign: "center",
            margin: "20px",
          }}
        >
          <label className="user" htmlFor="username">USERNAME </label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="user2" htmlFor="password">PASSWORD </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
  
  export default Login;