import React from "react";

const ListGroup = ({ items, onItemSelect, selectedGenre }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item._id}
          className={
            item === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
