import CodeWindow from ".././assets/components/homecode.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    const navProject = () => {
        navigate("/projects")
    }
    return (
        <div className="landingDiv">
            <title>Home</title>

            <div className="landingContent">
                <h1>Jacob Searles</h1>

                <h2>Software Developer</h2>

                <p>
                    I build modern applications with
                    React, Java, C++, and C#.
                </p>

                <button className="heroButton" onClick={navProject}>
                    View Projects
                </button>
            </div>

            <div className="heroRight">
                <CodeWindow />
            </div>

        </div>
    );
};

export default Home;