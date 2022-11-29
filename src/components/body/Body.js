import React, { useRef, useState } from "react";
import cls from "./Body.module.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Editor from "../editor/Editor";
import Resume from "../Resume/Resume";
import ReactToPrint from "react-to-print";

const Body = () => {
  const colors = ["#3c6aff", "#003e59", "crimson", "teal"];
  const [activeColor, setActiveColor] = useState(colors[0]);

  const rsmRef = useRef();

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

  // useEffect(() => {
  //   console.log(resumeInfo);
  // }, [resumeInfo]);

  return (
    <div className={cls.body}>
      <h1>Create Resume</h1>
      <div className={cls.toolbar}>
        <div className={cls.colors}>
          {colors.map((i) => {
            return (
              <span
                key={i}
                style={{ backgroundColor: i }}
                className={`${cls.color} ${activeColor === i && cls.active}`}
                onClick={() => setActiveColor(i)}
              />
            );
          })}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <AiOutlineCloudDownload />
              </button>
            );
          }}
          content={() => rsmRef.current}
        />
      </div>
      <div className={cls.main}>
        <Editor sec={sections} info={resumeInfo} setResumeInf={setResumeInfo} />
        <h1>Your Resume</h1>
        <Resume
          info={resumeInfo}
          sec={sections}
          activeClr={activeColor}
          rsmRef={rsmRef}
        />
      </div>
    </div>
  );
};

export default Body;
