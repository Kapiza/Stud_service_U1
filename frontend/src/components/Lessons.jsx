import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { DisContext } from "../context";
import { ConMenuContext } from "../context";

const Lessons = ({ classesType }) => {
  const classes = useSelector((state) => state.classes);
  const {disId} = useContext(DisContext)

  const {displayMenu} = useContext(ConMenuContext)
  
  

  return (
      <ol className="list_classes">
        {classes.allIds.map((id) => {
          const lesson = classes.byId[id];
          console.log(lesson)
          if (
            lesson.lesson_type == classesType &&
            disId == lesson.discipline_id
          ) {
            return (
              <div className="class" onContextMenu={(e) => displayMenu(e, "delete", "", classes.byId[id])}>
                <p>{lesson.name}</p>
                <img src="doc_icon.svg" alt="icon" className="doc-SVG" />
              </div>
            );
          }
        })}
            {/* <div className="class">
                <p>   |</p>
                {/* <img src="doc_icon.svg" alt="icon" className="doc-SVG" /> */}
              {/* </div> */} 
      </ol>
  );
};

export default Lessons;
