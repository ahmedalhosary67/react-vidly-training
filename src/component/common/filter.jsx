import React from "react"

const Filter = props => {
    return (
        <ul className="list-group">
            <li className="list-group-item active" onClick={props.onFiltering("All_genres")}>All genres</li>
            <li className="list-group-item" onClick={props.onFiltering("Action")}>Action</li>
            <li className="list-group-item" onClick={props.onFiltering("Comedy")}>Comedy</li>
            <li className="list-group-item" onClick={props.onFiltering("Thriller")}>Thriller</li>
        </ul>
    );
}
 
export default Filter;