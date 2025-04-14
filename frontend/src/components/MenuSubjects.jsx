import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { DisContext } from '../context';

const MenuSubjects = () => {

    const {byId, allIds} = useSelector(state => state.disciplines)
    const {setDisId} = useContext(DisContext)


    return (
        <div className="MenuSubjects">

            <div className="section_title">
                <svg className='SVG-icon' role = "img" width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="47.5" cy="47.5" r="47.5" fill="#7498c0" className='circle'/>
                    <path d="M80.97 43.227C81.5966 42.9506 82.1283 42.4965 82.4993 41.9208C82.8703 41.3452 83.0642 40.6734 83.0572 39.9886C83.0501 39.3038 82.8423 38.6362 82.4595 38.0683C82.0766 37.5005 81.5357 37.0574 80.9035 36.794L50.905 23.13C49.9931 22.714 49.0024 22.4988 48 22.4988C46.9977 22.4988 46.007 22.714 45.095 23.13L15.1 36.78C14.4769 37.0529 13.9468 37.5015 13.5746 38.0709C13.2024 38.6403 13.0042 39.3058 13.0042 39.986C13.0042 40.6663 13.2024 41.3318 13.5746 41.9012C13.9468 42.4706 14.4769 42.9191 15.1 43.192L45.095 56.87C46.007 57.286 46.9977 57.5013 48 57.5013C49.0024 57.5013 49.9931 57.286 50.905 56.87L80.97 43.227Z" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M83 40V61" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27 48.75V61C27 63.7848 29.2125 66.4555 33.1508 68.4246C37.089 70.3938 42.4305 71.5 48 71.5C53.5695 71.5 58.911 70.3938 62.8492 68.4246C66.7875 66.4555 69 63.7848 69 61V48.75" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <p className="level_1">Дисциплины</p>
            </div>

            <menu className="list_subjects">
                {allIds.map(id =>{
                    return(
                        <p className="dis_name" onClick={() => {setDisId(id)}}> 
                            {byId[id].name}
                        </p>
                    )

                })}
            </menu>


        </div>
    );
};

export default MenuSubjects;


{/*<img src="../assets/Icon_2.svg" alt="icon" width="300px" height="200px" />*/}
{/*<input title="Очистить список записей" name="reset" type="image"*/}
{/*       src="../assets/Icon.svg" alt="Submit" width="95px" height="95px"/>*/}
{/*<object type="svg" data="../../assets/Icon.svg" width="300" height="300"></object>*/}

{/*<h4>Title</h4>*/}
{/*<Menu>*/}
{/*    <h3>Предмет 1</h3>*/}
{/*    <h3>Предмети </h3>*/}
{/*</Menu>*/}

{/*<Icon></Icon>*/}