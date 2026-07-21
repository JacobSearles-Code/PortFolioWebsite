import profile from "../assets/data/profile.jpg"

const About = () => {

    return (
        <div className="aboutSection">
            <title>About Me</title>
            <div className="aboutImage">
                <img src={profile} alt="Jacob Searles" />
            </div>

            <div className="aboutContent">
                <h1>About Me</h1>

                <h2>Hi, I'm Jacob Searles</h2>

                <p>
                    I'm a software developer passionate about building modern,
                    user-friendly applications. I enjoy solving problems, learning
                    new coding languages, and
                </p>

                <div className="skills">
                    <span>React</span>
                    <span>Java</span>
                    <span>C#</span>
                    <span>C++</span>
                    <span>JavaScript</span>
                </div>
            </div>
        </div>
    )
}

export default About;