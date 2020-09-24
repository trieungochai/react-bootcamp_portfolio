import React from 'react';
import PROJECTS from './data/projects';

class Project extends React.Component {
    render() {

        const { title, description, link, image } = this.props.project;

        return (
            <div style={{display: 'inline-block', width: 300, margin: 10}}>
                <h3>{title}</h3>
                <img src={image} alt='profile' style={{width: 200, height: 120}}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        );
    };
};

class Projects extends React.Component {
    render() {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <Project key={PROJECT.id} project={PROJECT}/>
                        );
                    })
                }
            </div>
        );
    };
};

export default Projects;