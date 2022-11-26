import React, { useState } from "react";
import cls from "./Body.module.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Editor from "../editor/Editor";

const Body = () => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const [resumeInfo, setResumeInfo] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  return (
    <div className={cls.body}>
      <h2>Resume Builder</h2>
      <div className={cls.toolbar}>
        <div className={cls.colors}>
          {colors.map((i) => {
            return (
              <span
                key={i}
                style={{ backgroundColor: i }}
                className={cls.color}
              />
            );
          })}
        </div>
        <button>
          Download <AiOutlineCloudDownload />
        </button>
      </div>
      <div className={cls.main}>
        <Editor sec={sections} info={resumeInfo} />
      </div>
    </div>
  );
};

export default Body;
