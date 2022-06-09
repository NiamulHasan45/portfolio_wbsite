import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);
    
    return (
        <div>
            <h1 className='text-4xl text-accent font-bold'>PROJECTS</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-20 lg:m-20 m-10'>

                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;