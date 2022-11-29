import React, { useEffect, useState } from "react";
import InputControl from "../inputCtrl/InputControl";
import cls from "./Editor.module.css";

const Editor = ({ sec, info, setResumeInf }) => {
  const [activeSec, setActiveSec] = useState(Object.keys(sec)[0]);

  const [activeInfo, setActiveInfo] = useState(info[sec[Object.keys(sec)[0]]]);
  const [secTitle, setSecTitle] = useState(sec[Object.keys(sec)[0]]);
  const [activeDetailIdx, setActiveDetailIdx] = useState(0);

  const [values, setValues] = useState({
    name: activeInfo?.detail?.name || "",
    title: activeInfo?.detail?.title || "",
    linkedin: activeInfo?.detail?.linkedin || "",
    github: activeInfo?.detail?.github || "",
    phone: activeInfo?.detail?.phone || "",
    email: activeInfo?.detail?.email || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const workExpBody = (
    <div className={cls.detail}>
      <div className={cls.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          value={values.companyName}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, companyName: e.target.value }))
          }
        />
      </div>
      <div className={cls.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={values.certificationLink}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: e.target.value,
            }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          value={values.location}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, location: e.target.value }))
          }
        />
      </div>
      <div className={cls.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={values.endDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div>

      <div className={cls.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 2)}
        />
      </div>
    </div>
  );
  const projectBody = (
    <div className={cls.detail}>
      <div className={cls.row}>
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter title eg. Chat app"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <InputControl
        label="Overview"
        value={values.overview}
        placeholder="Enter basic overview of project"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, overview: e.target.value }))
        }
      />
      <div className={cls.row}>
        <InputControl
          label="Deployed Link"
          value={values.link}
          placeholder="Enter deployed link of project"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, link: e.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          value={values.github}
          placeholder="Enter github link of project"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, github: e.target.value }))
          }
        />
      </div>
      <div className={cls.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 3)}
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className={cls.detail}>
      <div className={cls.row}>
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter title eg. B-tech"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <InputControl
        label="College/School Name"
        value={values.college}
        placeholder="Enter name of your college/school"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, college: e.target.value }))
        }
      />
      <div className={cls.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.endDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className={cls.detail}>
      <div className={cls.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Nikhil"
          value={values.name}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter your title eg. Frontend developer"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div className={cls.row}>
        <InputControl
          label="Linkedin Link"
          value={values.linkedin}
          placeholder="Enter your linkedin profile link"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, linkedin: e.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          value={values.github}
          placeholder="Enter your github profile link"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, github: e.target.value }))
          }
        />
      </div>
      <div className={cls.row}>
        <InputControl
          label="Email"
          value={values.email}
          placeholder="Enter your email"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <InputControl
          label="Enter phone"
          value={values.phone}
          placeholder="Enter your phone number"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className={cls.detail}>
      <div className={cls.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 3)}
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className={cls.detail}>
      <InputControl
        label="Summary"
        value={values.summary}
        placeholder="Enter your objective/summary"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, summary: e.target.value }))
        }
      />
    </div>
  );
  const otherBody = (
    <div className={cls.detail}>
      <InputControl
        label="Other"
        value={values.other}
        placeholder="Enter something"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, other: e.target.value }))
        }
      />
    </div>
  );

  const generateBody = () => {
    switch (sec[activeSec]) {
      case sec.basicInfo:
        return basicInfoBody;
      case sec.workExp:
        return workExpBody;
      case sec.project:
        return projectBody;
      case sec.education:
        return educationBody;
      case sec.achievement:
        return achievementsBody;
      case sec.summary:
        return summaryBody;
      case sec.other:
        return otherBody;
      default:
        return null;
    }
  };

  useEffect(() => {
    const activeInf = info[sec[activeSec]];
    setActiveInfo(activeInf);
    setSecTitle(sec[activeSec]);
    setActiveDetailIdx(0);
    setValues({
      name: activeInf?.detail?.name || "",
      overview: activeInf?.details ? activeInf.details[0]?.overview || "" : "",
      link: activeInf?.details ? activeInf.details[0]?.link || "" : "",
      certificationLink: activeInf?.details
        ? activeInf.details[0]?.certificationLink || ""
        : "",
      companyName: activeInf?.details
        ? activeInf.details[0]?.companyName || ""
        : "",
      college: activeInf?.details ? activeInf.details[0]?.college || "" : "",
      location: activeInf?.details ? activeInf.details[0]?.location || "" : "",
      startDate: activeInf?.details
        ? activeInf.details[0]?.startDate || ""
        : "",
      endDate: activeInf?.details ? activeInf.details[0]?.endDate || "" : "",
      points: activeInf?.details
        ? activeInf.details[0]?.points
          ? [...activeInf.details[0]?.points]
          : ""
        : activeInf?.points
        ? [...activeInf.points]
        : "",
      title: activeInf?.details
        ? activeInf.details[0]?.title || ""
        : activeInf?.detail?.title || "",
      linkedin: activeInf?.detail?.linkedin || "",
      github: activeInf?.details
        ? activeInf.details[0]?.github || ""
        : activeInf?.detail?.github || "",
      phone: activeInf?.detail?.phone || "",
      email: activeInf?.detail?.email || "",
      summary: typeof activeInf?.detail !== "object" ? activeInf.detail : "",
      other: typeof activeInf?.detail !== "object" ? activeInf.detail : "",
    });
  }, [activeSec]);

  const submitHandle = () => {
    // console.log(values);
    switch (sec[activeSec]) {
      case sec.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        setResumeInf((prev) => ({
          ...prev,
          [sec.basicInfo]: {
            ...prev[sec.basicInfo],
            detail: tempDetail,
            secTitle,
          },
        }));
        break;
      }
      case sec.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...info[sec.workExp]?.details];
        tempDetails[activeDetailIdx] = tempDetail;

        setResumeInf((prev) => ({
          ...prev,
          [sec.workExp]: {
            ...prev[sec.workExp],
            details: tempDetails,
            secTitle,
          },
        }));
        break;
      }
      case sec.project: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [...info[sec.project]?.details];
        tempDetails[activeDetailIdx] = tempDetail;

        setResumeInf((prev) => ({
          ...prev,
          [sec.project]: {
            ...prev[sec.project],
            details: tempDetails,
            secTitle,
          },
        }));
        break;
      }
      case sec.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...info[sec.education]?.details];
        tempDetails[activeDetailIdx] = tempDetail;

        setResumeInf((prev) => ({
          ...prev,
          [sec.education]: {
            ...prev[sec.education],
            details: tempDetails,
            secTitle,
          },
        }));
        break;
      }
      case sec.achievement: {
        const tempPoints = values.points;

        setResumeInf((prev) => ({
          ...prev,
          [sec.achievement]: {
            ...prev[sec.achievement],
            points: tempPoints,
            secTitle,
          },
        }));
        break;
      }
      case sec.summary: {
        const tempDetail = values.summary;

        setResumeInf((prev) => ({
          ...prev,
          [sec.summary]: {
            ...prev[sec.summary],
            detail: tempDetail,
            secTitle,
          },
        }));
        break;
      }
      case sec.other: {
        const tempDetail = values.other;

        setResumeInf((prev) => ({
          ...prev,
          [sec.other]: {
            ...prev[sec.other],
            detail: tempDetail,
            secTitle,
          },
        }));
        break;
      }
    }
  };

  const addNewHandle = () => {
    const details = activeInfo?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    setResumeInf((prev) => ({
      ...prev,
      [sec[activeSec]]: {
        ...info[sec[activeSec]],
        details: details,
      },
    }));
    setActiveDetailIdx(details?.length - 1);
  };

  const deleteChipHandle = (index) => {
    const details = activeInfo?.details ? [...activeInfo?.details] : "";
    if (!details) return;
    details.splice(index, 1);
    setResumeInf((prev) => ({
      ...prev,
      [sec[activeSec]]: {
        ...info[sec[activeSec]],
        details: details,
      },
    }));

    setActiveDetailIdx((prev) => (prev === index ? 0 : prev - 1));
  };

  // changing fields data when you go for add new
  useEffect(() => {
    const details = activeInfo?.details;
    if (!details) return;

    const activeInf = info[sec[activeSec]];
    setValues({
      overview: activeInf.details[activeDetailIdx]?.overview || "",
      link: activeInf.details[activeDetailIdx]?.link || "",
      certificationLink:
        activeInf.details[activeDetailIdx]?.certificationLink || "",
      companyName: activeInf.details[activeDetailIdx]?.companyName || "",
      location: activeInf.details[activeDetailIdx]?.location || "",
      startDate: activeInf.details[activeDetailIdx]?.startDate || "",
      endDate: activeInf.details[activeDetailIdx]?.endDate || "",
      points: activeInf.details[activeDetailIdx]?.points || "",
      title: activeInf.details[activeDetailIdx]?.title || "",
      linkedin: activeInf.details[activeDetailIdx]?.linkedin || "",
      github: activeInf.details[activeDetailIdx]?.github || "",
      college: activeInf.details[activeDetailIdx]?.college || "",
    });
  }, [activeDetailIdx]);

  useEffect(() => {
    setActiveInfo(info[sec[activeSec]]);
  }, [info]);

  return (
    <div className={cls.editor}>
      <div className={cls.container}>
        {Object.keys(sec)?.map((i) => {
          return (
            <div
              className={`${cls.section} ${activeSec === i && cls.active}`}
              key={i}
              onClick={() => setActiveSec(i)}
            >
              {sec[i]}
            </div>
          );
        })}
      </div>

      <div className={cls.body}>
        <InputControl
          label="Title"
          placeholder="Enter section title"
          value={secTitle}
          onChange={(e) => setSecTitle(e.target.value)}
        />
        <div className={cls.chips}>
          {activeInfo?.details &&
            activeInfo?.details?.map((i, idx) => {
              return (
                <div
                  className={`${cls.chip} ${
                    activeDetailIdx === idx ? cls.active : ""
                  }`}
                  key={i.title + idx}
                  onClick={() => setActiveDetailIdx(idx)}
                >
                  <p>
                    {sec[activeSec]}
                    {idx + 1}
                  </p>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteChipHandle(idx);
                    }}
                  >
                    X
                  </span>
                </div>
              );
            })}
          {activeInfo?.details && activeInfo?.details.length > 0 && (
            <div className={cls.new} onClick={addNewHandle}>
              +New
            </div>
          )}
        </div>
        {generateBody()}

        <button onClick={submitHandle}>Save</button>
      </div>
    </div>
  );
};

export default Editor;
