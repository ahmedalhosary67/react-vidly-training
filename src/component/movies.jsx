import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";

class Movies extends Component {
  state = {
    Movies: getMovies(),
    pageSize: 4,
  };

  handleDelete = (movie) => {
    // console.log(movie);
    const Movies = this.state.Movies.filter((m) => m._id !== movie._id);
    this.setState({ Movies });
  };
  handleLike = (movie) => {
    movie.liked = !movie.liked;
    this.setState(this.state.Movies);
  };
  handlePage = (page) => {
    console.log(page);
  };
  // handleLike = (movie) => {
  //     const Movies = [...this.state.Movies];
  //     const index = Movies.indexOf(movie);
  //     Movies[index] = {...Movies[index]};
  //     Movies[index].liked = !Movies[index].liked;
  //     this.setState({ Movies })
  // }
  render() {
      const {length: count} = this.state.Movies;
    if (count === 0)
      return <p>There are no movie in database</p>;

    return (
      <React.Fragment>
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
            {this.state.Movies.map((movie) => (
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
          pageSize={this.state.pageSize}
          onChange={this.handlePage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
