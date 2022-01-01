import './contact.css'
import GitHub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import YouTube from "../../img/youtube.png";
import { useRef } from "react";
import { saveAs } from "react";

function Contact() {
    const formRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

    };

    function handleSave() {
        saveAs(
            "",
            "LeticiaRossett-Resume.pdf"
        );
    };

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Find Me On Social Media!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <a href="https://www.linkedin.com/in/leticia-rossett/" target="_blank" rel="noreferrer">
                                <img src={LinkedIn} alt="" className="c-icon" />
                            </a>
                            LinkedIn
                        </div>
                        <div className="c-info-item">
                            <a href="https://github.com/LeticiaRossett" target="_blank" rel="noreferrer">
                                <img src={GitHub} alt="" className="c-icon" />
                            </a>
                            GitHub
                        </div>
                        <div className="c-info-item">
                            <a href="https://www.youtube.com/channel/UC18sQ-TzrjX1cnSVJ6eODRQ" target="_blank" rel="noreferrer">
                                <img src={YouTube} alt="" className="c-icon" />
                            </a>
                            YouTube
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>More Info?</b> Contact me! My resume is available for download below.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' name='user_name' />
                        <input type='text' placeholder='Subject' name='subject' />
                        <input type='text' placeholder='Email' name='user_email' />
                        <textarea rows='5' placeholder='Message' name='message' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
