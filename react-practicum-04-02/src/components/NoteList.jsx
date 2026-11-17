import { useState } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";

function NoteList() {
  const [noteList, setNoteList] = useState([]);
  function addNote(note) {
    setNoteList([...noteList, note]);
  }
  return (
    <div>
      <NoteForm addNote={addNote}></NoteForm>
      <h2>Заметки</h2>
      {noteList.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
}
export default NoteList;
