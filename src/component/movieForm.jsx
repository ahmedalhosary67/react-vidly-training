import React from "react";
import joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "./../services/fakeGenreService";
import { getMovie, saveMovie } from './../services/fakeMovieService';

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: joi.string(),
    title: joi.string().required().label("Title"),
    genreId: joi.string().required().label("Genre"),
    numberInStock: joi.number().required().min(0).max(100).label("No in Stock"),
    dailyRentalRate: joi.number().required().min(0).max(10).label("rate"),
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "" }, ...getGenres()];
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return; //return imediatly

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/non-found");

    this.setState({ data: this.mapToViewModel(movie) })
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,

    }
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies"); // or replace
    // call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}


// const MovieForm = ({ match, history }) => {
//   return (
//     <div>
//       <h1>Movie Form {match.params.title} </h1>
//       <form>
//         <div className="form-group">
//           <label htmlFor="exampleFormControlInput1">Title</label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="Title"
//             value={match.params.title}
//           ></input>
//         </div>
//         <div className="form-group">
//           <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
//             Genre
//           </label>
//           <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
//             <option selected>{match.params.genreName}</option>
//             <option value="Action">Action</option>
//             <option value="Comedy">Comedy</option>
//             <option value="Thriller">Thriller</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="exampleFormControlInput2">No</label>
//           <input
//             type="number"
//             className="form-control"
//             id="exampleFormControlInput2"
//             placeholder="Number"
//             value={match.params.title}
//           ></input>
//         </div>

//       </form>
//       <Link className="btn btn-primary mt-3 py-1 px-2" to="/movies">
//         save
//       </Link>
//       {/* <button className="btn btn-primary mt-3 py-1 px-2" onClick={() => history.push('/movies')}>save2</button> */}
//     </div>
//   );
// };

export default MovieForm;
