import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { Description } from "@material-ui/icons";
import { DescriptionOutlined } from "@material-ui/icons";

function Header() {
  return (
    <header>
      <h1>
        <Description />
        NoteBook
      </h1>
    </header>
  );
}

export default Header;