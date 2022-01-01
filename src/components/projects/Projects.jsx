import './projects.css';

function Projects({ title, img, link }) {
    return (

        <div className='p'>
            <h3 className='p-picture-title'>{title}</h3>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt={title} className='p-img' />
            </a>
        </div>
    )
}

export default Projects
