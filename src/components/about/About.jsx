import './about.css';
import Profile from "../../img/profile.jpg";
import Skills from "../../img/skills.png";

function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={Profile}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <br /><br />
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    &emsp;Hardworking, diligent team player with strong communication
                    skills and proven talent for learning quickly in results-oriented environment.
                </p>
                <div className="a-desc">
                    <p>&emsp;I graduated in 2021 with a Bachelors degree in Computer Science. Ever since,
                        I have worked as a Software Engineer where I learned new skills, and was able to solve
                        real world problems.
                        What I love about my job is the satisfaction of solving problems,
                        the continuous learning opportunities and the collaborative environment.
                    </p>
                    <br />
                    <p>
                        &emsp;Apart from work, I spend my time traveling, playing with my dog
                        Momo, working on personal projects, reading and exercising.
                    </p>
                    <br />
                </div>

                <h4>You can find some of my programming skills below!</h4>

                <div className="a-skills">
                    <img src={Skills} alt="" className='a-skills-img' />
                </div>
                <br /><br />

            </div>
        </div>
    )
}

export default About
