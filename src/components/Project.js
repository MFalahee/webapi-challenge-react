import React from 'react';

function Project(props) {
    console.log(props);
    return(
        <div>
            <h3> {props.project.name}</h3>
            <p> {props.project.description} </p>

            <button> See Details </button> 
        </div>
    )
}

export default Project;