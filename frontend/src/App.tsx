import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Entry } from "./models/entry";

function App() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    async function loadEntry() {
      try {
        const response = await fetch("/api/entries", {
          method: "GET",
        });
        const entries = await response.json();
        setEntries(entries);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadEntry();
  }, []);

  return <div className="App">{JSON.stringify(entries)}</div>;
}

export default App;
