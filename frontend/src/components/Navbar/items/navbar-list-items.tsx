import { navbarListItem } from "../../../interfaces/navbar-interfaces";
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
    route: "/about",
  },
  {
    id: 1,
    icon: <TextSnippet />,
    label: "Posts",
    route: "/posts",
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
        route: "/works/coding",
      },
      {
        id: 2,
        icon: <Piano />,
        label: "Music",
        route: "/works/music",
      },
      {
        id: 3,
        icon: <PhotoCamera />,
        label: "Photos",
        route: "/works/photo",
      },
    ],
  },
  {
    id: 3,
    icon: <Forum />,
    label: "Forum",
    route: "/forum",
  },
];
