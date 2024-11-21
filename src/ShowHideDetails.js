import React, { useState } from "react";

function ShowHideDetails() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible); // Toggle visibility
  };

  return (
    <div>
     <button onClick={toggleDetails}>{isDetailsVisible?"Hide Detail": "Show Detail" }</button>
     {
      isDetailsVisible && (
        <div>
        <p>Here is the Details</p>
        </div>
      )
     }
    </div>
  );
}
export default ShowHideDetails