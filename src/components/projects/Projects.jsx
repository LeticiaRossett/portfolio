import './projects.css';
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';

function Projects({ title, img, link, description }) {
    const [show, setShowModal] = useState(false);

    function handleShow() {
        setShowModal(true);
    };

    return (
        <div className='p' onClick={handleShow}>
            <h3 className='p-picture-title'>{title}</h3>
            <img src={img} alt={title} className='p-img' />

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <div className='p-description'>{description}</div>
                <div className='p-link'>{link}</div>

                <Modal.Footer>
                    <Button variant="secondary">Close Modal</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Projects
