import React from "react";
import { Link } from "react-router-dom";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form {match.params.title} </h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            value={match.params.title}
          ></input>
        </div>
        <div className="form-group">
          <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
            Genre
          </label>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>{match.params.genreName}</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">No</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Number"
            value={match.params.title}
          ></input>
        </div>
        
      </form>
      <Link className="btn btn-primary mt-3 py-1 px-2" to="/movies">
        save
      </Link>
      {/* <button className="btn btn-primary mt-3 py-1 px-2" onClick={() => history.push('/movies')}>save2</button> */}
    </div>
  );
};

export default MovieForm;
