import React, {useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Popup from "./Popup";
import {ReactComponent as Pina} from './pin.svg'

function Pin(props) {
  const [popup, setpopup] = useState(false)

  return (
    <>
     {popup &&
    <div >
      <Popup noteItem = {props.noteItem} id={props.id} pins={props.pins} pin={true} setPins={props.setPins} setpopup={setpopup}/>
    </div>
    }
    <div className="note" onClick={() => {setpopup(true)}} >
    <div className="buttons">
        <button 
          onClick={(e) => {
          e.stopPropagation();
          props.unPin(props.id)
          }}
          >
            <Pina style={{height:"23px"}}/>
        </button>
      <button 
         onClick={(e) => {
          e.stopPropagation();
          props.onDelete(props.id)}}>
        <DeleteIcon />
      </button>
      </div>
      <h1>{props.noteItem.title}</h1>
      <p>{props.noteItem.tag}</p>
      <p>{props.noteItem.content}</p>
      
    </div>
    </>
  );
}

export default Pin;