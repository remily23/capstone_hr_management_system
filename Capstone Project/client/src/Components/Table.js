import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ mappedEmployees }) => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200,},
  ];

  return (
  <div style={{ height: 400, width: '100%', backgroundColor: '#F5F5F5' }}>
    <DataGrid
      rows={mappedEmployees}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </div>
  );
};

export default Table;