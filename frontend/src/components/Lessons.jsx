import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { DisContext } from "../context";

const Lessons = ({ classesType }) => {
  const classes = useSelector((state) => state.classes);
  const {disId} = useContext(DisContext)

  return (
      <ol className="list_classes">
        {classes.allIds.map((id) => {
          const lesson = classes.byId[id];
          if (
            lesson.classType == classesType &&
            disId == lesson.disciplineId
          ) {
            return (
              <div className="class">
                <p>{lesson.name}</p>
                <img src="doc_icon.svg" alt="icon" className="doc-SVG" />
              </div>
            );
          }
        })}
      </ol>
  );
};

export default Lessons;
