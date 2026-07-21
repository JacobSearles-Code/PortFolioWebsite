import { PrevProjects } from "../assets/data/projects.js";

const Projects = () => {

    return (
        <div className="projectsDiv">
            <title>Projects</title>
            <h1>Previous Projects I've Worked on</h1>
            <div className="displayDiv">
                {PrevProjects.map((projects) => (
                    <a key={projects.id} href={projects.website} target="_blank" rel="noopener noreferrer" className="logoCard">
                        <img src={projects.preview} alt={projects.name} />
                        <p className="projectName">{projects.name}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects;