import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(props.expand);

  const [note, setNote] = useState({
    title: "",
    tag : "",
    content: ""
  });

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      tag: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && 
        (
          <div>
          <input
            name="title"
            onChange={(event) =>{
              setNote((prev) => ({...prev,
                title : event.target.value}))
            }}
            value={note.title}
            placeholder="Title"
          /> <input
        name="tagline"
        onChange={(event) =>{
          setNote((prev) => ({...prev,
            tag : event.target.value}))
        }}
        value={note.tag}
        placeholder="Tagline..."
      />
      </div>
    )}


        <input
          name="content"
          onClick={expand}
          value={note.content}
          onChange={(event) =>
            setNote((prev)=>({...prev,
            content : event.target.value}))
          }
          placeholder="Take a note..."
          // rows={isExpanded ? 3 : 1}
        />
        {isExpanded && 
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>}
      </form>
    </div>
  );
}

export default CreateArea;