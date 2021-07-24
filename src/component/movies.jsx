import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import Filter from "./common/filter";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    Movies: getMovies(),
    Movies: getGenres(),
    currentPage: 1,
    pageSize: 4,
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
  handleFiltring = (type) => {
    const Movies = this.state.Movies.filter(g => g.name !== type)
    
  }

  // handleLike = (movie) => {
  //     const Movies = [...this.state.Movies];
  //     const index = Movies.indexOf(movie);
  //     Movies[index] = {...Movies[index]};
  //     Movies[index].liked = !Movies[index].liked;
  //     this.setState({ Movies })
  // }
  render() {
    const { length: count } = this.state.Movies;
    const { pageSize, currentPage, Movies: allMovies } = this.state;

    if (count === 0) <p>There are no movie in database</p>;

    const Movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-3">
            <Filter onFiltring={(type) => this.handleFiltring(type)} />
          </div>
          <div className="col-sm-9">
            <p>Showing {count} movies in database</p>
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
              itemCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onChange={this.handlePage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
