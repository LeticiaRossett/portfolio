import './ProjectList.css';
import Projects from '../projects/Projects';
import { projects } from "../../data.js";

function ProjectList() {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">My Personal Projects</h1>
                <p className='pl-desc'>
                    These are some of the projets I worked on since
                    my time in College.
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) =>
                    <Projects
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        link={item.link}
                    />
                )}
            </div>
        </div>
    )
}

export default ProjectList
