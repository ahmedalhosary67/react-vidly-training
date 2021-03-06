import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  creatKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => {
              if (column.path === "title") {
                return (
                  <td key={this.creatKey(item, column)}>
                    <Link to={() => "/movieForm/" + item._id  }>{this.renderCell(item, column)}</Link>
                  </td>
                );
              } else {
                return (
                  <td key={this.creatKey(item, column)}>
                    {this.renderCell(item, column)}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
