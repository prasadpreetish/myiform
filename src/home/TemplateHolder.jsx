import React from "react";
import "./templateHolder.css";
const TemplateHolder = () => {
  return (
    <>
      <div className="template-holder-container">
        <div className="normal-text">Start a new form</div>
        <div className="template-image-holder">
          <img
            src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
            alt="Blank Template Add Icon"
          />
          <div className="normal-text-2">Blank Form</div>
        </div>
      </div>
    </>
  );
};

export default TemplateHolder;
