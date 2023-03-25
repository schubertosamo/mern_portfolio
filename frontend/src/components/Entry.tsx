import { Card } from "react-bootstrap";
import { Entry as EntryModel } from "../models/entry";

interface EntryProps {
  entry: EntryModel;
}

const Entry = ({ entry }: EntryProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{entry.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Entry;
