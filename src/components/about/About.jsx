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
                <hr />
                <br /><br />
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    &emsp;Hardworking, diligent team player with strong communication
                    skills and proven talent for learning quickly in results-oriented environment.
                </p>
                <div className="a-desc">
                    <p>&emsp;I graduated in 2021 with a Bachelors degree in Computer Science. Ever since,
                        I have worked as Junior Software Engineer and acquired a couple of new skills.
                        What I love about my job is the satisfaction of solving problems,
                        the continuous learning opportunities and the collaborative enviroment.
                    </p>
                    <br />
                    <p>
                        &emsp;Apart from work, I spend my time practicing different sports, playing with my dog
                        Momo, learning new skills and creating content on my YouTube channel.
                    </p>
                    <br />
                </div>

                <h4>You can find some of my programming skills below!</h4>

                <div className="a-skills">
                    <img src={Skills} alt="" className='a-skills-img' />
                </div>
                <br /><br />
                <hr />

            </div>
        </div>
    )
}

export default About
