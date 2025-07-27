import React, { useState } from "react";
import { InputGroup, Button } from "@blueprintjs/core";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddNotes({ setShowForm, updateNotes }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function addNote() {
    const title = newTitle.trim();
    const description = newDescription.trim();

    if (title && description) {
      const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

      const newNote = {
        id: Date.now(),
        title,
        description
      };

      const updatedNotes = [...storedNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));

      setNewTitle("");
      setNewDescription("");
      toast.success("Note added successfully!", {
        position: 'top-center',
        autoClose: 2000,
        });
        updateNotes();
        setShowForm(false);
    }
  }

  return (
    <div className="form bp5-input-group">
      <h2 className="form-title">Create Notes</h2><br />
      <InputGroup
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="custom-input"
        placeholder="Enter the title..."/><br />
      <InputGroup
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="custom-input"
        placeholder="Enter the description..."/>
      <div className="button-container">
        <Button icon="plus" className="add-button yellow-btn" onClick={addNote}>
          Add Note
        </Button>
      </div>
    </div>
  );
}

export default AddNotes;
