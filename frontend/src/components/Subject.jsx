// import React, {useState} from 'react';
import "../styles/App.css"
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import Block from "./Block";
import {useSelector} from 'react-redux'

const Subject = ({subject, addNote, removeNote}) => {

    const teachers = useSelector(state => state.disciplines)
    console.log(teachers)

    return (
        <div className="Subject">
            <div className="info">
                <p >Физика</p>
                <p >Ситников М. Н.</p>
                <p className="link">E-mail, VK, TG</p>
                <p >Экзамен</p>
            </div>
            <div className="blocks">
                <Block class="class_block"/>
                <Block class="class_block"/>
                <Block class="description_block"/>

            </div>

        </div>
    )
};

export default Subject;