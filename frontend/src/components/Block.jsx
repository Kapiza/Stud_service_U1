import React from "react";
import { useSelector } from "react-redux";

const Block = ({children, className }) => {
  return (
    <div className={`Block ${className}`}>
      {children}
    </div>
  );
};

export default Block;
