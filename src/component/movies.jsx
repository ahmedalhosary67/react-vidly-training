import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/Pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import Input from "./common/input";
import SelectBox from "./common/searchBox";

class Movies extends Component {
  state = {
    Movies: [],
    genres: [],
    searchQuery: "",
    selectedGenre: null,
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All genres" }, ...getGenres()];

    this.setState({ Movies: getMovies(), genres });
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
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

  handleAddMovie = () => {
    return null;
  };

  getPagesData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      searchQuery,
      sortColumn,
      Movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
      // console.log( m.title.toLowerCase().includes(searchQuery.toLowerCase()))
      m.title.toLowerCase().includes(searchQuery.toLowerCase())
        // m.title.toLowerCase().startswith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const Movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: Movies };
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
      genres,
      searchQuery,
    } = this.state;

    if (count === 0) <p>There are no movie in database</p>;

    const { totalCount, data: Movies } = this.getPagesData();

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
          <Link
            className="btn btn-danger py-1 px-2 m-2"
            onClick={this.handleAddMovie()}
            to="/movieForm/new"
          >
            New Movie
          </Link>
          <p>Showing {totalCount} movies in database</p>
          <SelectBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            Movies={Movies}
            onLiked={this.handleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemCount={totalCount}
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
