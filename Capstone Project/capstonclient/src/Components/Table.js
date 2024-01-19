import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', // type: 'string',
   width: 200,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];
const rows = [
  { id: 1, lastName: 'A', firstName: "Gisel", email: "gisel@bnta.com" },
  { id: 2, lastName: 'H', firstName: 'Tom', email: "tomhanks@gmail.com" },
  { id: 3, lastName: 'M', firstName: 'Saima', email: "saima@bnta.com" },
  { id: 4, lastName: 'R', firstName: 'Emily', email: "emily@bnta.com" },
  { id: 5, lastName: 'N', firstName: 'Ryan', email: "ryan@bnta.com" },
  { id: 6, lastName: 'N', firstName: 'Aanis', email: "aanisn10@gmail.com"
},

]
export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%', backgroundColor: '#F5F5F5' }}>
      <DataGrid
        rows={rows}
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
}