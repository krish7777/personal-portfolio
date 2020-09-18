import "./Contact.css";
import { AwesomeButtonSocial } from "react-awesome-button";
import { AwesomeButton } from "react-awesome-button";

export default () => {
  return (
    <div className="container contact">
      <h1 style={{ color: "white" }}>Contact Me</h1>
      <p style={{ color: "white", marginTop: "5vh", marginBottom: "10px" }}>
        Say Hi to me at{" "}
      </p>
      <AwesomeButton href="mailto:krishnendusudheesh4@gmail.com">
        krishnendusudheesh4@gmail.com
      </AwesomeButton>
      <p style={{ color: "white", marginTop: "30px" }}>
        If you wanna get in touch or be friends, kick me at my social links. I am cool guy&#128526; , well not always as sometimes  get hot depending on temperature&#128513;. I know, I know that was a lame joke and maybe thats why I dont have a gf yet&#128517;
      </p>
      <div className="social-buttons-wrapper">
        <div className="social-buttons">
          {/* <AwesomeButtonSocial
            type="facebook"
            href="https://www.facebook.com/krish.iscooldude"
            target="_blank"
          >
            <p>FACEBOOK</p>
          </AwesomeButtonSocial> */}
          <AwesomeButtonSocial
            type="instagram"
            href="https://www.instagram.com/krish_sudheesh/"
            target="_blank"
          >
            <p>INSTAGRAM</p>
          </AwesomeButtonSocial>
          <AwesomeButtonSocial
            type="linkedin"
            href="https://www.linkedin.com/krish7777/"
            target="_blank">
            LINKEDIN
          </AwesomeButtonSocial>
          <AwesomeButtonSocial
            type="twitter"
            href="https://twitter.com/krishs777"
            target="_blank"
          >
            <p>TWITTER</p>
          </AwesomeButtonSocial>
          <AwesomeButtonSocial
            type="github"
            href="https://github.com/krish7777"
            target="_blank"
          >
            <p>GITHUB</p>
          </AwesomeButtonSocial>
        </div>
      </div>
    </div >
  );
};
