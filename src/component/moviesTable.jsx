import React, { Component } from "react";
import Like from "./common/Like";
import TableHeader from "./tableHeader";

class MoviesTable extends Component {
  columns = [
    { path: "title", lable: "Title" },
    { path: "genre", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];
  render() {
    const { Movies, onLiked, onDelete, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <tbody>
          {Movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLiked(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
