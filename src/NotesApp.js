import {useEffect, useState} from "react";
import Note from "./Note";
import './NotesApp.css';
import { IoSearchOutline } from "react-icons/io5";

const NotesApp = () => {
    const [notes, setNotes] = useState( ()=> {
        const savedNotes = localStorage.getItem('notes');
        return savedNotes ? JSON.parse(savedNotes) : [];

    });
     const [searchTerm , setSearchTerm] = useState('');

     const filteredNotes= notes.filter((note) =>
         note.text.toLowerCase().includes(searchTerm.toLowerCase())
     );

     const addNote = () => {
         const newNote = {id: Date.now(), text:''};
         setNotes([...notes, newNote ]);
     };

     const updateNote = (updateNote) =>{
         setNotes(notes.map((note) => (note.id === updateNote.id ? updateNote : note)));
     };

     const deleteNote = (id) => {
         setNotes(notes.filter((note) => note.id !== id));
     };

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return(
        <div className="notes-app">
            <input
                type="text"
                placeholder={"search notes ... "}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                >

            </input>
            {filteredNotes.map((note) => (
                <>
                    <Note key={note.id} note={note} onSave={updateNote} onDelete={() => deleteNote(note.id)}/>
                </>
                ))}
            <button onClick={addNote}>Add Note</button>
        </div>
    );

};

export default NotesApp