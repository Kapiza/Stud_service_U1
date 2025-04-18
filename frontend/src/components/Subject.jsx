// import React, {useState} from 'react';
import { ConMenuContext, DisContext } from "../context";
import {useSelector} from 'react-redux'
import { useContext } from "react";
import "../styles/App.css"
import Block from "./Block";
import TeacherContacts from "./TeacherContacts";
import Lessons from "./Lessons";
import ContextMenu from "./ContextMenu";
import ContextMenuButton from "./ContextMenuButton";


const Subject = () => {

    const disciplines = useSelector(state => state.disciplines)
    const {disId} = useContext(DisContext)
    const discipline = disciplines.byId[disId]
    
    const teachers = useSelector(state => state.teachers);
    const teacher = teachers.byId[discipline.teacherId]

    const {displayMenu, hideMenu} = useContext(ConMenuContext)


    return (
        <div className="Subject">

            <div className="part_1 title_block title_name active_title level_1">
                {discipline.name}
            </div>

            <div className="part_2 work_block" disciplineId={discipline.id} classes_type = {'практика'} onContextMenu={(e) => displayMenu(e, "delete",console.log)}>
                <p className="level_2">Практика</p> 
                <Lessons classesType = {"практика"}/>
        
            </div>

            <div className="part_3 work_block" disciplineId={discipline.id}  classes_type = {'теория'} onContextMenu={(e) => displayMenu(e, "add",() => console.log(5))}>
                <p className="level_2">Теория</p> 
                <Lessons classesType = {"теория"}/>
            </div>

            <div className="part_4 info level_1">
                <p >{teacher.name}</p>
                <TeacherContacts teacherId={discipline.teacherId}/>
                <p >{discipline.assessment_type}</p>
            </div>

            <div className="part_5 work_block">
                    <p className="level_2">Описание</p> 
                    <p className="description"> {discipline.description}      </p>
            </div> 

        </div>
    )
};

export default Subject;




















    {/* <div className="info">
    </div>
    <div className="blocks">
        <Block  className="class_block" classes_type = {'практика'}>
        </Block>
      
       
    {/* </div> */}