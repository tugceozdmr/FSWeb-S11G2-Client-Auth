import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";

function Logout() {
  let history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .post("/api/logout")
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        history.push("/login");
      });
  }, []);
}

export default Logout;