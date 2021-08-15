import "./App.css";
import React from "react";
import { useState } from "react";

import { useEffect } from "react";

function App() {
  const [data, setdata] = useState("");

  useEffect(() => {
    fetch("api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setdata(data);
      });
  }, []);

  return (
    <div className="App">
      <p>{!data ? "Loading..." : data.message}</p>
    </div>
  );
}

export default App;
