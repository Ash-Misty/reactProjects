import React from "react";
import { Button, EditableText } from "@blueprintjs/core";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notes({ notes, setNotes }) {
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    toast.warn("Note Deleted successfully!", {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  const updateNote = (id, field, value) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, [field]: value } : note
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    toast.info("Note Updated successfully!", {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  return (
    <div className="Notes-container">
      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        notes.map((note) => (
          <div className="Notes-div" key={note.id}>
            <dl>
              <dt className="notes-title">
                <EditableText
                  defaultValue={note.title}
                  onConfirm={(value) => updateNote(note.id, "title", value)}
                  placeholder="Click to edit title"
                  multiline={false}
                />
              </dt>
              <hr />
              <dd className="notes-desc">
                <EditableText
                  defaultValue={note.description}
                  onConfirm={(value) => updateNote(note.id, "description", value)}
                  placeholder="Click to edit description"
                  multiline
                  minLines={2}
                  maxLines={5}
                />
              </dd>
              <dd>
                <div className="del-div">
                  <Button
                    icon="trash"
                    intent="danger"
                    className="trash-btn"
                    onClick={() => deleteNote(note.id)}
                  />
                </div>
              </dd>
            </dl>
          </div>
        ))
      )}
    </div>
  );
}

export default Notes;
