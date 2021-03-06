import React from 'react';
import Title from './title';
import Project from './project';
import { Link } from 'gatsby';

const Projects = ({ projects, title, showLink }) => {
    return (
        <section className='section projects'>
            <Title title={title} />
            <div className='section-center projects-center'>
                {projects.map((project, index) => {
                    return (
                        <Project key={project.id} index={index} {...project} />
                    );
                })}
            </div>
            {
                showLink && (
                    <Link to='/projects' className='button center-button'>
                        Projects
                    </Link>
                )
            }
        </section>
    );
}

export default Projects;
