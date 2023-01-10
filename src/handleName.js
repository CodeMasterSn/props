import React from "react";

const handleName = props => {
    return (
      <div>
        <button onClick={() => props.alert(props.fullName)}>
          ClickMe
        </button>
      </div>
    );
  };  

export default handleName;