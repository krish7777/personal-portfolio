import "./About.css";
import Mouse from "../mouse/mouse";
import { AwesomeButton } from "react-awesome-button";


export default () => {
  return (
    <div className="container about">
      <h1>About Me</h1>
      <p style={{ fontWeight: "500", marginTop: "5vh", fontSize: "16px", marginBottom: "5vh" }}>
        I am a third <strong>Computer Science</strong> student at <strong>IIT Tirupati</strong>&#129304;. My main interests are <strong>Web Development </strong> and <strong>App Development</strong>
        <br />
        <br />
        I have also started learning <em>Machine Learning</em> and <em>Computer Vision</em> and have found the field very interesting eventhough I am a noob at it right now &#128517;.
        <br />
        <br />
        Besides academics I am very much interested in music and even play violin. I am also a close observer of the both regional and national politics and aims to bring transparency and honesty in the system one day
      </p>
      <AwesomeButton href="/resume.pdf" target="_blank" >
        RESUME
      </AwesomeButton>
      <div className="scroll-mouse">
        <Mouse />
      </div>
    </div>
  );
};
