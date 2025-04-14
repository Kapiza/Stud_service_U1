// import React, {useState} from 'react';
import { DisContext } from "../context";
import {useSelector} from 'react-redux'
import { useContext } from "react";
import "../styles/App.css"
import Block from "./Block";
import TeacherContacts from "./TeacherContacts";
import Lessons from "./Lessons";


const Subject = () => {

    const disciplines = useSelector(state => state.disciplines)
    const {disId} = useContext(DisContext)
    const discipline = disciplines.byId[disId]
    
    const teachers = useSelector(state => state.teachers);
    const teacher = teachers.byId[discipline.teacherId]

    return (
        <div className="Subject">
            <div className="info">
                <p className="dis_name" >{discipline.name}</p>
                <p >{teacher.name}</p>
                <TeacherContacts teacherId={discipline.teacherId}/>
                <p >{discipline.assessment_type}</p>
            </div>
            <div className="blocks">
                <Block disciplineId={discipline.id} className="class_block" classes_type = {'практика'}>
                    <p className="level_2">Практика</p> 
                    <Lessons classesType = {"практика"}/>
                </Block>
                <Block disciplineId={discipline.id} className="class_block" classes_type = {'теория'}>
                    <p className="level_2">Теория</p> 
                    <Lessons classesType = {"теория"}/>
                </Block>
                <Block className="description_block">
                    <p className="level_2">Описание</p> 
                    {discipline.description}    
                </Block>
            </div>
        </div>
    )
};

export default Subject;