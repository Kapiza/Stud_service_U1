// import React, {useState} from 'react';
import "../styles/App.css"
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

const Subject = ({subject, addNote, removeNote}) => {

    if (!subject) {
        return (
            // В стилях центрируем сообщение
            // <div style={{  width: "500px",
            //     height: "500px", position: "absolute", top:  "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div className="Subject">
                Карточка не выбрана
            </div>
    )
    }

    const {title, subTitle, notes} = subject;

    return (
        <div className="Subject">
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
            <NoteList notes = {notes} removeNote = {removeNote} />
            <NoteForm addNote = {addNote}></NoteForm>
        </div>
    );
};

export default Subject;