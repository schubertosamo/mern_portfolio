import styles from "../styles/Entry.module.css";
import { Card } from "react-bootstrap";
import { Entry as EntryModel } from "../models/entry";

interface EntryProps {
  entry: EntryModel;
}

const Entry = ({ entry }: EntryProps) => {
  const { title, text, createdAt, updatedAt } = entry;
  return (
    <Card className={styles.entryCard}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.entryCard}>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Entry;
