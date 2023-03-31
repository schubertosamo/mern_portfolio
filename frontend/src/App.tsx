import React, { useEffect, useState } from "react";
import { Entry as EntryModel } from "./models/entry";
import Entry from "./components/Entry";
import Navbar from "./components/Navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/EntryPage.module.css";

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
    <div>
      <Navbar />
    </div>
    // <Container>
    //   <Row xs={1} md={2} xl={3} className="g-4">
    //     {entries.map((entry) => (
    //       <Col>
    //         <Entry entry={entry} key={entry._id} className={styles.note} />
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
  );
}

export default App;
