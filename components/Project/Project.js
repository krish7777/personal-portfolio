import { AwesomeButtonSocial } from 'react-awesome-button';
import "./Project.scss"

export default ({ name, link, description, technologies }) => {
    return (
        <div className="project">
            <strong>{name}</strong>
            <AwesomeButtonSocial
                size="icon"
                type="github"
                target="_blank"
                href={link}

            />
            <p className="about-project">
                {description}
            </p>
            <p style={{ fontSize: "18px", textDecoration: "underline", marginTop: "10px", marginBottom: "10px" }}>Technologies Used</p>
            <div className="technologies-used">
                {technologies.map(t => <p>{t}</p>)}
            </div>
        </div>
    )
}