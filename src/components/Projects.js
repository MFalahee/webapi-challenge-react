import React from 'react';
import axios from 'axios';

class Projects extends React.Component {
    state = {
        projectlist: []
    }

    componentDidMount() {
        axios
            .get('http://localhost:4000')
    }

    render() {
        return (
            <div>
                <h3> Project List </h3>
            </div>
        )
    }
}


export default Projects;