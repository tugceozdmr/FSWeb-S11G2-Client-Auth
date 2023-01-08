import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

function FriendsList() {
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then((response) => {
        if (response.status === 200) {
          setFriends(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (

    <div>
      <h2 className="list" style={{ textAlign: "center" }}>FRIENDS LIST</h2>
      <ul 
        style={{
          textAlign: "center",
          listStyle: "none",
        }}
      >
        {friends ? ( friends.map((f) => (
            <li key={f.id}> {f.name} - {f.email} </li>
          ))
        ) : (
          <div>Bağlantı Hatası</div>
        )}
      </ul>
    </div>
  );
}

export default FriendsList;