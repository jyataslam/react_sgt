import React from 'react';

export default props => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.course}</td>
            <td>{props.grade}</td>
            <td>
                <button onClick={() => props.delete(props.id)} className="btn btn-floating red darken-2 waves-effect waves-dark">
                <i className="material-icons z-depth-2 scale-transition">delete</i></button>
            </td>
        </tr>
    )
}