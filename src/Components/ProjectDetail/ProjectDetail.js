import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch('https://niamulhasan45.github.io/projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    const mainProject = project.filter(a=>{
       return (a.id)==id;
    })

    console.log(mainProject)

    return (
        <div>
             <div class="card glass mx-auto lg:w-1/2 w-3/4 p-10 my-10 bg-primary">
                <figure><img src={`../${mainProject[0]?.image}`} alt="project!"/></figure>
                <div class="card-body px-20">
                    <h2 class="card-title mx-auto">{mainProject[0]?.title}</h2>
                    <p>Description: {mainProject[0]?.description}</p>
                    <h3 className='text-xl text-yellow-300'><span className='font-bold'>Technology : </span>{mainProject[0]?.technology}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;