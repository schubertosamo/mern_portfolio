import React, { useEffect, useState } from "react";
import { Entry as EntryModel } from "./models/entry";
import Entry from "./components/Entry";
import { Container, Row } from "react-bootstrap";

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
    <Container>
      <Row xs={1} md={2} xl={3}>
        {entries.map((entry) => (
          <Entry entry={entry} key={entry._id} />
        ))}
      </Row>
    </Container>
  );
}

export default App;
