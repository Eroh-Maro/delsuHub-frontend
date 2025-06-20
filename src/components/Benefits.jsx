import React from "react";
import { FaUsers } from "react-icons/fa";

const Benefits = ({ icon: Icon, text }) => {
  return (
    <div className="benefitsCard">
    <div className="benefitIcon">
      <div className="icon">
          <Icon className="largeIcon"/>
      </div>
    </div>
    <div className="writeUp">
      {text}
    </div>
  </div>
  );
};

export default Benefits;