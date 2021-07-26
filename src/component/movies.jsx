import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    Movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    const genres = [{name: "All genres"}, ...getGenres()]

    this.setState({ Movies: getMovies(), genres });
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleDelete = (movie) => {
    const Movies = this.state.Movies.filter((m) => m._id !== movie._id);
    this.setState({ Movies });
  };

  handleLike = (movie) => {
    movie.liked = !movie.liked;
    this.setState(this.state.Movies);
  };

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  // handleLike = (movie) => {
  //     const Movies = [...this.state.Movies];
  //     const index = Movies.indexOf(movie);
  //     Movies[index] = {...Movies[index]};
  //     Movies[index].liked = !Movies[index].liked;
  //     this.setState({ Movies })
  // }
  render() {
    const { length: count } = this.state.Movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      Movies: allMovies,
      genres,
    } = this.state;

    if (count === 0) <p>There are no movie in database</p>;

    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter( m => m.genre.name === selectedGenre.name)
      : allMovies;

    const Movies = paginate(filtered, currentPage, pageSize);

    return (
      // <React.Fragment>
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedGenre={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in database</p>
          <table className="table">
            <thead>
              <tr>
                <td>Title</td>
                <td>Genre</td>
                <td>Stock</td>
                <td>Rate</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {Movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onChange={this.handlePage}
          />
        </div>
      </div>
      // </React.Fragment>
    );
  }
}

export default Movies;
