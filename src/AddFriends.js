import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";

function AddFriends() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post("api/friends", formData)
      .then((res) => {
        console.log(JSON.stringify(res));
        setFormData({ name: "", email: "" });
        //history.push("/friends");
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setFormData({ name: "", email: "" });
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "center",
          margin: "20px",
        }}
      >
        <label clasName="fri" htmlFor="name">FRIEND NAME </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label clasName="fri2" htmlFor="email">FRIEND EMAIL </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default AddFriends;