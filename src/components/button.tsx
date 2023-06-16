import React from "react";

interface IProps {
  type: "button" | "submit";
}

const Button: React.FC<IProps> = ({ type }) => {
  return (
    <div className="button">
      <button type={type} className="btn">
        Upload PDF
      </button>
    </div>
  );
};

export default Button;
