import React from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

const Table = ({ data, columns, onSort, sortColumn }) => {
  
    return ( 
        <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody
          columns={columns}
          data={data}
        />
      </table>
     );
}
 
export default Table;