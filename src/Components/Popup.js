import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import { Check } from "@material-ui/icons";

function Popup(props) {
  const [note, setNote] = useState({
    title: props.noteItem.title,
    tag : props.noteItem.tag,
    content: props.noteItem.content
  });
  const noteAt = () =>{
    if(props.pin){
      var tempPins = [...props.pins];
      tempPins[props.id] = note;
      props.setPins(tempPins);
    }
    else{
      var tempNotes = [...props.notes];
    tempNotes[props.id] = note;
    props.setNotes(tempNotes);
    }
  }

  return (
    
    <div className="popup">
      
      <form >
      <div className="buttons" onClick={() => {
        props.setpopup(false)}}>X</div>

          <input
            name="title"
            onChange={(event) =>{
              setNote((prev) => ({...prev,
                title : event.target.value}))
            }}
            value={note.title}
            placeholder="Title"
          /> 

          <input
        name="tagline"
        onChange={(event) =>{
          setNote((prev) => ({...prev,
            tag : event.target.value}))
        }}
        value={note.tag}
        placeholder="Tagline..."
      />

        <input
          name="content"
          value={note.content}
          onChange={(event) =>
            setNote((prev)=>({...prev,
            content : event.target.value}))
          }
          placeholder="Take a note..."
        />

        <Fab onClick={() =>{
          noteAt();
          props.setpopup(false)
          }}>
            <Check />
          </Fab>
      </form>
    </div>
  );
}

export default Popup;