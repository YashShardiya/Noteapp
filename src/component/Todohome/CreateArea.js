import React, { useState } from "react";
import "./CreateArea.css";


export default function CreateArea(props) {

         const[isexpand,setExpand] = useState(false);
    
         const [note,setNote] = useState({
           title:"",
           content:""
         })


    function handleChange(event) {
      
      const {name,value} = event.target;
         setNote(prevNote =>{
           return {...prevNote,[name]:value};
         })
    }

    function handleSubmit(event) {
     props.onAdd(note);
     setNote({
       title:"",
       content:""
     })
     event.preventDefault();
    }

    function onExpand() {
      setExpand(true);
    }

    return( <div>
      <form className="create-note" action="">
        {isexpand && (<input type="text"  name="title" onChange={handleChange}  className="title" placeholder="Title" value={note.title} />) }
       
       <textarea name="content" onClick={onExpand} onChange={handleChange} cols="30" rows={isexpand? 3 : 1} className="content" placeholder="Take Notes Here..." value={note.content}></textarea>
       
       <button onClick={handleSubmit}><i className="fa-solid fa-plus"></i></button>
       
      </form>
    </div>);
}