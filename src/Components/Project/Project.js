import React from 'react';

const Project = ({project}) => {
    const {date, title, image, description, link} = project;
    return (
        <div>
            <div class="card glass mx-auto bg-primary">
                <figure><img src={image} alt="project!"/></figure>
                <div class="card-body px-20">
                    <h2 class="card-title mx-auto">{title}</h2>
                    <p>{description}</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-accent"><a href={link}>Live view</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;