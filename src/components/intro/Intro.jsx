import './intro.css';
import BackgroundPicture from "../../img/canva-avatar.png";

function Intro() {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className="i-left-wrapper">
                    <h2 className='introduction'>Hello, My name is</h2>
                    <h2 className='i-name'>Leticia Rossett</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Computer Science Graduate</div>
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Creator</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Full-stack</div>
                            <div className="i-title-item">Outdoor Enthusiast</div>
                        </div>
                    </div>
                    <p className="i-description">
                        I am a Frontend Engineer with full-stack experience and a passion for transforming ideas into code.
                        Here I share some of the side projects I've been working on.
                    </p>
                </div>
                <svg>
                    // TODO
                </svg>
            </div>
            <div className='i-right'>
                <div className="i-bg"></div>
                <img src={BackgroundPicture} alt='' className='i-img' />
            </div>
        </div>
    )
}

export default Intro
