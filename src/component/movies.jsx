import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/Pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    Movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All genres" }, ...getGenres()];

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

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
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
      sortColumn,
      Movies: allMovies,
      genres,
    } = this.state;

    if (count === 0) <p>There are no movie in database</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const Movies = paginate(sorted, currentPage, pageSize);

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
          <MoviesTable
            Movies={Movies}
            onLiked={this.handleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
          />
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
