import './App.css';
import AddNotes from './components/AddNotes';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { useState, useEffect } from 'react';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    updateNotes();
  }, []);

  // Function to refresh notes from localStorage
  const updateNotes = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      {showForm && (
        <AddNotes 
          setShowForm={setShowForm} 
          updateNotes={updateNotes} 
        />
      )}
      <Notes notes={notes} setNotes={setNotes}/>

      {!showForm && (
        <div 
          style={{
            textAlign: "center",
            margin: "20px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <button 
            className="show-form-btn yellow-btn" 
            onClick={() => setShowForm(true)}
          >
            +
          </button>
        </div>
      )}
    </>
  );
}

export default App;
