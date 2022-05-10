import React from "react";
import CreateArea from "./CreateArea";
import Account from "./Account";
import "./Todo.css";
import { useState, useEffect } from "react";
import { db } from "../fireconfig";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";




export default function Todohome() {
  const [notes, setNotes] = useState([]);
  
  const usersCollectionRef = collection(db, "list");

  function refreshPage() {
    window.location.reload(false);
  }

  // AddNote
  const addNote = async (newNote) => {
    const title = newNote.title;
    const content = newNote.content;
    await addDoc(usersCollectionRef, { content: content, title: title });
    refreshPage()
    
  };

  //Delete Note
  const deleteUser = async (id) => {
    const userDoc = doc(db, "list", id);
    await deleteDoc(userDoc);
    refreshPage()
  };

  //ShowNote
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      <CreateArea onAdd={addNote} />
      <Account />
      {notes.map((notice,index) => {
      
        
        return (
          <div className="note" key={index}>
            <h1 >{notice.title}</h1>
            <p>{notice.content}</p>
            <button  onClick={() => {
                deleteUser(notice.id);
              }}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}
