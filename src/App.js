import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";

function App(props) {
  const[notes,setNotes]=useState([])  ;
  function addNote(newNote){
    setNotes(prevalue=> {  return [...prevalue,newNote]; }); }
  function deleteNotes(id) {setNotes((preValue) => { return [...preValue.filter((note, index) => index !== id)]; }); }


  return (
    <div className="App">
      <Header />
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Notes in YC Keep`
        }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;