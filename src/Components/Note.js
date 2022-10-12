import React, {useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {ReactComponent as Pina} from './pin.svg'
import Popup from "./Popup";

function Note(props) {
  const [popup, setpopup] = useState(false)

  return (
    <>
    {popup &&
    <div >
      <Popup noteItem = {props.noteItem} id={props.id} notes={props.notes} pin={false} setNotes={props.setNotes} setpopup={setpopup}/>
    </div>
    }
    <div className="note" onClick={() => {setpopup(true)}} >
      
      <div className="buttons">
        <button 
           onClick={(e) => {
            e.stopPropagation();
            props.onDelete(props.id)}}>
        <DeleteIcon />
        </button>
        <button 
          onClick={(e) => {
          e.stopPropagation();
          props.addPins(props.id)
          }}
          >
            <Pina style={{height:"23px"}}/>
        </button>
      </div>
      
      <h1>{props.noteItem.title}</h1>
      <p >{props.noteItem.tag} </p>
      <p>{props.noteItem.content}</p>
     
    </div>
    </>
  );
}

export default Note;