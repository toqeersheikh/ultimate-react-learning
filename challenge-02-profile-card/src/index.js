import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#911232",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#d8db01",
  },
  {
    skill: "Git & Github",
    level: "intermediate",
    color: "#c4ee0a",
  },
  {
    skill: "Web design",
    level: "advanced",
    color: "#222",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#1d62e4",
  },
  {
    skill: "Next JS",
    level: "beginner",
    color: "#ad08a5",
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#176300",
  },
  {
    skill: "Tailwind CSS",
    level: "advanced",
    color: "#1eecf3",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar source="./avatar.jpg" />

      <div className="data">
        <Intro
          name="Toqeer Sheikh"
          description="I am a Computer Science student and Frontend Developer focused on
        mastering the JavaScript ecosystem and core software engineering
        principles. I balance building responsive web applications with
        deep-dives into low-level logic, memory management, and algorithmic
        problem-solving."
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.source} alt="avatar" className="avatar" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skillData) => {
        return <Skill skillData={skillData} key={skillData.skill} />;
      })}
    </ul>
  );
}
function Skill({ skillData }) {
  return (
    <li
      className="skill"
      style={{ backgroundColor: skillData.color, color: "#fff" }}
    >
      <span>{skillData.skill}</span>
      <span>
        {/* {skillData.level === "advanced" || skillData.level === "intermediate"
          ? "💪"
          : "👶"} */}
        {/* Conditionally text rendering using && operator short circuiting */}

        {skillData.level === "beginner" && "👶"}
        {skillData.level === "intermediate" && "👍"}
        {skillData.level === "advanced" && "💪"}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
