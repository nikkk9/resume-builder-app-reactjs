import React, { forwardRef, useState } from "react";
import cls from "./Resume.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";
import { AiOutlinePhone, AiOutlinePaperClip } from "react-icons/ai";
import { useEffect } from "react";
import { useRef } from "react";

const Resume = forwardRef(({ sec, info, activeClr }, rsmRef) => {
  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");
  const resumeRef = useRef();

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const inf = {
    workExp: info[sec.workExp],
    project: info[sec.project],
    achievement: info[sec.achievement],
    education: info[sec.education],
    basicInfo: info[sec.basicInfo],
    summary: info[sec.summary],
    other: info[sec.other],
  };

  const sectionDiv = {
    [sec.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => seTarget(inf.workExp?.id)}
        onDragEnd={() => setSource(inf.workExp?.id)}
        className={`${cls.section} ${inf.workExp?.secTitle ? "" : cls.hidden}`}
      >
        <div className={cls.secTitle}>{inf.workExp.secTitle}</div>
        <div className={cls.content}>
          {inf.workExp?.details?.map((item) => (
            <div className={cls.item} key={item.title}>
              {item.title ? (
                <p className={cls.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={cls.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={cls.link} href={item.certificationLink}>
                  <AiOutlinePaperClip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={cls.date}>
                  <SlCalender /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={cls.date}>
                  <FiMapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={cls.points}>
                  {item.points?.map((elem, index) => (
                    <li className={cls.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sec.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => seTarget(inf.project?.id)}
        onDragEnd={() => setSource(inf.project?.id)}
        className={`${cls.section} ${inf.project?.secTitle ? "" : cls.hidden}`}
      >
        <div className={cls.secTitle}>{inf.project.secTitle}</div>
        <div className={cls.content}>
          {inf.project?.details?.map((item) => (
            <div className={cls.item}>
              {item.title ? (
                <p className={cls.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={cls.link} href={item.link}>
                  <AiOutlinePaperClip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={cls.link} href={item.github}>
                  <BsGithub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={cls.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={cls.points}>
                  {item.points?.map((elem, index) => (
                    <li className={cls.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sec.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => seTarget(inf.education?.id)}
        onDragEnd={() => setSource(inf.education?.id)}
        className={`${cls.section} ${
          inf.education?.secTitle ? "" : cls.hidden
        }`}
      >
        <div className={cls.secTitle}>{inf.education?.secTitle}</div>
        <div className={cls.content}>
          {inf.education?.details?.map((item) => (
            <div className={cls.item}>
              {item.title ? (
                <p className={cls.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={cls.subTitle}>Some college name</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={cls.date}>
                  <SlCalender /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sec.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(inf.achievement?.id)}
        onDragEnd={() => setSource(inf.achievement?.id)}
        className={`${cls.section} ${
          inf.achievement?.secTitle ? "" : cls.hidden
        }`}
      >
        <div className={cls.secTitle}>{inf.achievement?.secTitle}</div>
        <div className={cls.content}>
          {inf.achievement?.points?.length > 0 ? (
            <ul className={cls.numbered}>
              {inf.achievement?.points?.map((elem, index) => (
                <li className={cls.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sec.summary]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => seTarget(inf.summary?.id)}
        onDragEnd={() => setSource(inf.summary?.id)}
        className={`${cls.section} ${inf.summary?.secTitle ? "" : cls.hidden}`}
      >
        <div className={cls.secTitle}>{inf.summary?.secTitle}</div>
        <div className={cls.content}>
          <p className={cls.overview}>{inf.summary?.detail}</p>
        </div>
      </div>
    ),
    [sec.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => seTarget(inf.other?.id)}
        onDragEnd={() => setSource(inf.other?.id)}
        className={`${cls.section} ${inf.other?.secTitle ? "" : cls.hidden}`}
      >
        <div className={cls.secTitle}>{inf.other?.secTitle}</div>
        <div className={cls.content}>
          <p className={cls.overview}>{inf?.other?.detail}</p>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    setColumns([
      [sec.project, sec.education, sec.summary],
      [sec.workExp, sec.achievement, sec.other],
    ]);
  }, []);

  //   for drag and drop functionality
  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  //   changing color of resume with dynamically
  useEffect(() => {
    const resume = resumeRef.current;
    if (!activeClr || !resume) return;

    resume.style.setProperty("--varC", activeClr);
  }, [activeClr]);

  return (
    <div ref={rsmRef}>
      <div className={cls.resume} ref={resumeRef}>
        <div className={cls.container}>
          <p className={cls.heading}>{inf.basicInfo?.detail?.name}</p>
          <p className={cls.subHeading}>{inf.basicInfo?.detail?.title}</p>

          <div className={cls.links}>
            {inf.basicInfo?.detail?.email ? (
              <a
                href={inf.basicInfo?.detail?.email}
                className={cls.link}
                type="email"
              >
                <HiOutlineMail /> {inf.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {inf.basicInfo?.detail?.phone ? (
              <a href={inf.basicInfo?.detail?.phone} className={cls.link}>
                <AiOutlinePhone /> {inf.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {inf.basicInfo?.detail?.linkedin ? (
              <a href={inf.basicInfo?.detail?.linkedin} className={cls.link}>
                <BsLinkedin /> {inf.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {inf.basicInfo?.detail?.github ? (
              <a href={inf.basicInfo?.detail?.github} className={cls.link}>
                <BsGithub /> {inf.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>

          <div className={cls.main}>
            <div className={cls.col1}>
              {columns[0].map((item) => sectionDiv[item])}
            </div>
            <div className={cls.col2}>
              {columns[1].map((item) => sectionDiv[item])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
