import React from 'react';
import axios from 'axios';

import Project from './Project';

//https://webapi-challenge-react.herokuapp.com/api/projects

class Projects extends React.Component {
    state = {
        projectlist: []
    }

    componentDidMount() {
        axios
            .get('https://webapi-challenge-react.herokuapp.com/api/projects')
            .then(res => {
                console.log(res);
                this.setState({projectlist: res.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        console.log(this.state.projectlist);
        return (
            <div>
                <h1> Project List </h1>
                {this.state.projectlist.map(project => {
                    return <Project project={project} key={project.id} />
                })}
            </div>
        )
    }
}


export default Projects;