import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";
import Pin from "./Components/Pin";

function App() {
  const [notes, setNotes] = useState([]);
  const [pins, setPins] = useState([]);
  const [render, setRender] = useState(1);

  const addNote = (note) =>{
    setNotes((prev) => ([...prev, note]))
  }

  const deleteNote = (id) =>{
    notes.splice(id, 1);
    console.log(notes)
    setRender(render+1);
  }
  const deletePin = (id) =>{
    pins.splice(id, 1);
    setRender(render+1);
  }
  const addPins = (id) =>{
    const temp = notes[id];
    setPins((prev) => ([...prev, temp]));
    deleteNote(id);
  }
  const unPin = (id) =>{
    const temp = pins[id];
    addNote(temp);
    deletePin(id);
  }

  return (
    <div className="app">
      <Header />
      <CreateArea onAdd={addNote} expand={false}/>
      {pins.length ? <div style={{color:"white", margin:"21px"}}>Pinned</div> : ""}
      <div className="pins">
      {pins.map((noteItem, index) => {
        console.log("pin",index)
        return (
          
          <Pin
          key={index}
          id={index}
          noteItem={noteItem}
          unPin={unPin}
          notes={notes}
          pins={pins}
          setPins={setPins}
          setNotes={setNotes}
          onDelete={deletePin}
          />
          
        );
      })}
</div>
   
      {pins.length ? <div style={{color:"white", margin:"21px"}}>Others</div> : ""}
      <div className="notes">
      {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            noteItem={noteItem}
            notes={notes}
            setNotes={setNotes}
            onDelete={deleteNote}
            addPins ={addPins}
            addNote={addNote}
          />
      ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      
    </div>

  );
}

export default App;
