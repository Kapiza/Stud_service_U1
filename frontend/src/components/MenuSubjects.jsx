import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { DisContext } from '../context';

const MenuSubjects = () => {

    const {byId, allIds} = useSelector(state => state.disciplines)
    const {setDisId} = useContext(DisContext)


    return (
        <div className="MenuSubjects">

            <div className="section_title">
                <img src="Icon.svg" alt="icon" className="SVG-icon"  />
                <p className="level_1">Дисциплины</p>
            </div>

            <menu className="list_subjects">
                {allIds.map(id =>{
                    return(
                        <p onClick={() => {
                            setDisId(id)
                        }}>{byId[id].name}</p>
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