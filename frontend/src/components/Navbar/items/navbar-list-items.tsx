import { navbarListItem } from "../../interfaces/navbar-interfaces";
import { Person, TextSnippet, Forum, Piano } from "@mui/icons-material";

export const navbarListItems: navbarListItem[] = [
  {
    id: 0,
    icon: <Person />,
    label: "About me",
    route: "/",
  },
  {
    id: 1,
    icon: <TextSnippet />,
    label: "Posts",
    route: "/",
  },
  {
    id: 2,
    icon: <Forum />,
    label: "Forum",
    route: "/",
  },
  {
    id: 3,
    icon: <Piano />,
    label: "Performances",
    route: "/",
  },
];
