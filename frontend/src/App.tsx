import React, { useEffect, useState } from "react";
import "./App.css";
import { Entry as EntryModel } from "./models/entry";
import Entry from "./components/Entry";

function App() {
  const [entries, setEntries] = useState<EntryModel[]>([]);

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

  return (
    <div className="App">
      {entries.map((entry) => (
        <Entry entry={entry} key={entry._id} />
      ))}
    </div>
  );
}

export default App;
