import React from "react";

const capitalize = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function Alert(props) {
  return (
  <div style={{height: '50px'}}> 
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>}
    </div>
  );
}

export default Alert;




// cls - cumulative layout shift 
// It happens when an alert takes extra shift to show alert