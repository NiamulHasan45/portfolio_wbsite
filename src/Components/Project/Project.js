import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Project = ({project}) => {
    const {id, date, title, description, link} = project;
  

    return (
        <div>
            <div class="card glass mx-auto bg-primary">
                <figure><img src={project?.image} alt="project!"/></figure>
                <div class="card-body px-20">
                    <h2 class="card-title mx-auto">{title}</h2>
                    <div class="card-actions justify-center my-5">
                        <button class="btn btn-accent"><a href={link}>Live view</a></button>
                        <button className='btn btn-secondary text-accent'><Link to={`/projectdetail/${id}`}>See Detail</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;