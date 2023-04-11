import styles from "../styles/Entry.module.css";
import { Card } from "@mui/material";
import { Entry as EntryModel } from "../models/entry";

interface EntryProps {
  entry: EntryModel;
  className?: string;
}

const Entry = ({ entry, className }: EntryProps) => {
  const { title, text, createdAt, updatedAt } = entry;
  return (
    <Card className={`${styles.entryCard} ${className}`}>
      <Card>
        <Card>{title}</Card>
        <Card className={styles.entryText}>{text}</Card>
      </Card>
    </Card>
  );
};

// todo review material ui card and adjust the components above

export default Entry;
