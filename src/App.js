import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";
import Pin from "./Components/Pin";
import { db } from "./firebase";
import { collection, doc, addDoc, setDoc, getDoc } from "firebase/firestore"; 
import { async } from "@firebase/util";

function App() {
  const [notes, setNotes] = useState([]);
  const [pins, setPins] = useState([]);
  const [render, setRender] = useState(1);

  const addNote = async(note) =>{
    setNotes((prev) => ([...prev, note]));
    const docRef = doc(db, "collection1", "Notes");
    await setDoc(docRef , {
    notes : notes
    });
  }

  const deleteNote = async(id) =>{
    notes.splice(id, 1);
    console.log(notes)
    setRender(render+1);
    const notesObj ={
      notes : notes
     }
       const docRef = doc(db, "collection1", "Notes");
       await setDoc(docRef , notesObj);
  }
  const deletePin = async(id) =>{
    pins.splice(id, 1);
    setRender(render+1);

    const docRef = doc(db, "collection1", "Pins");
    await setDoc(docRef , {
     pins : pins
     });
  }
  const addPins =  async(id) =>{
    const temp = notes[id];
    setPins((prev) => ([...prev, temp]));
    deleteNote(id);
    const docRef = doc(db, "collection1", "Pins");
    await setDoc(docRef , {
    pins : pins
    });
  }
  const unPin = async(id) =>{
    const temp = pins[id];
    addNote(temp);
    deletePin(id);

   
  }

  const retrieveNotes = async ()=>{
    console.log("retrieve")
    const docRef = doc(db, "collection1", "Notes")
    const docSnap = await getDoc(docRef);
    
    if(docSnap.exists){
      console.log("exist")
      setNotes(docSnap.data().notes)
    }
    else{
      console.log("no data")
    }
  }

  const retrievePins = async ()=>{
    const docRef = doc(db, "collection1", "Pins")
    const docSnap = await getDoc(docRef);
    
    if(docSnap.exists){
      console.log("exist")
      setPins(docSnap.data().pins)
    }
    else{
      console.log("no data")
    }
  }
  
  useEffect(()=>{
    console.log("effect1")
    retrieveNotes();
    retrievePins();
  },[])

  // useEffect(()=>{
  //   console.log("effect2")
  //   console.log(notes);
    
  // },[notes])
  

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
