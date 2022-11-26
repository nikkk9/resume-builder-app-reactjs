import React from "react";
import cls from "./Header.module.css";
import resume from "../../assets/resume.svg";

const Header = () => {
  return (
    <div className={cls.header}>
      <div className={cls.left}>
        <h1>Build a professional resume for free</h1>
        <button>Create Resume</button>
      </div>
      <div className={cls.right}>
        <img src={resume} alt="" />
      </div>
    </div>
  );
};

export default Header;
