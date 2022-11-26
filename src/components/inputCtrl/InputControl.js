import React from "react";
import cls from "./InputControl.module.css";

const InputControl = ({label,...props}) => {
  return <div className={cls.inputCtrl}>{label&&<label>{label}</label>}
  <input type="text" {...props} /></div>;
};

export default InputControl;
