import "./App.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState("");

  const [users, setusers] = useState([]);
  const [email, setEmail] = useState("");

  const addToDb = () => {
    axios
      .post("http://localhost:3001/insert", {
        name: name,
        email: email,
      })
      .then(() => {
        console.log("Record is inserted successfully");
      });

    setName("");
    setEmail("");
  };

  const deleteRec = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      console.log("record is deleted");
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/read").then((response) => {
      console.log(response.data);
      setusers(response.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="App">
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          placeholder="name"
          id="name"
        />{" "}
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          placeholder="name"
          id="email"
        />{" "}
        <br /> <br />
        <button onClick={addToDb}>Submit</button>
      </div>

      {users.map((user, key) => {
        return (
          <div key={key}>
            <h1>
              {user.name} , {user.email}
            </h1>

            <button onClick={() => deleteRec(user._id)}>Delete record</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
