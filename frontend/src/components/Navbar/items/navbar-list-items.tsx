import { navbarListItem } from "../../interfaces/navbar-interfaces";
import {
  Person,
  TextSnippet,
  Forum,
  Piano,
  Construction,
  Code,
  PhotoCamera,
} from "@mui/icons-material";

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
    icon: <Construction />,
    label: "Works",
    route: "/",
    subItems: [
      {
        id: 1,
        icon: <Code />,
        label: "Coding",
        route: "/",
      },
      {
        id: 2,
        icon: <Piano />,
        label: "Music",
        route: "/",
      },
      {
        id: 3,
        icon: <PhotoCamera />,
        label: "Photo",
        route: "/",
      },
    ],
  },
  {
    id: 3,
    icon: <Forum />,
    label: "Forum",
    route: "/",
  },
];
