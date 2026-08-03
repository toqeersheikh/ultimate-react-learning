import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

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
      <Skill skill="JavaScript" color={{ background: "yellow" }} />
      <Skill skill="TypeScript" color={{ background: "orange" }} />
      <Skill skill="Python" color={{ background: "green" }} />
      <Skill skill="C++" color={{ background: "red" }} />
      <Skill skill="Node JS" color={{ background: "gray" }} />
      <Skill skill="Next JS" color={{ background: "purple" }} />
      <Skill skill="React JS" color={{ background: "blue" }} />
    </ul>
  );
}
function Skill(props) {
  return (
    <li className="skill" style={props.color}>
      {props.skill}
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
