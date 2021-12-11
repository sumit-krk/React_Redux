
import axios from "axios";
import { useState,useEffect } from "react"
import { DataGrid } from '@mui/x-data-grid';

const API="http://localhost:3001/orders"
// "order_id": 1,
// "orders_size": 7,
// "full_name": "Cooper Purdy",
// "user_city": "Chelopech",
// "order_price": "$335.20",
// "status": "shipped",
// "created_at": "22/05/2020",
// "days_to_finish": 4,
// "id": 1
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'full_name',
      headerName: 'Full name',
      width: 150,
      editable: true,
    },
    {
      field: 'user_city',
      headerName: 'CITY',
      width: 150,
      editable: true,
    },
    {
      field: 'order_price',
      headerName: 'PRICE',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'STATUS',
      width: 160,
      
    },
  ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];



const Orders= () => {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get(API);
        setPosts(data);
      };
    
      // Trigger the fetchData after the initial render by using the useEffect hook
      useEffect(() => {
        fetchData();
      }, []);
    return <div>
       <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[6]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </div>
}
export {Orders}