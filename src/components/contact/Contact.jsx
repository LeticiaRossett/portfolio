import './contact.css'
import GitHub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import YouTube from "../../img/youtube.png";
import { useRef } from "react";
import SaveFile from './SaveFile';
import emailjs from 'emailjs-com';
import { useState } from "react";

function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_extdlab',
                'template_4kyhibx',
                formRef.current,
                'user_QqOUxUkysukRXid44bbr'
            )
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
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
                                LinkedIn
                            </a>
                        </div>
                        <div className="c-info-item">
                            <a href="https://github.com/LeticiaRossett" target="_blank" rel="noreferrer">
                                <img src={GitHub} alt="" className="c-icon" />
                                GitHub
                            </a>
                        </div>
                        <div className="c-info-item">
                            <a href="https://www.youtube.com/channel/UC18sQ-TzrjX1cnSVJ6eODRQ" target="_blank" rel="noreferrer">
                                <img src={YouTube} alt="" className="c-icon" />
                                YouTube
                            </a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>More Info?</b> Contact me! My resume is also available
                        for download below.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' name='user_name' />
                        <input type='text' placeholder='Subject' name='user_subject' />
                        <input type='text' placeholder='Email' name='user_email' />
                        <textarea rows='5' placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done && "Thank you!"}
                    </form>
                    <div className='c-save-button'><SaveFile /></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
