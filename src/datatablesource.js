export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 }, {
        field:'user', headerName:'User', width: 230, renderCell: (params)=> {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.userName}
                </div>
            )
        }
    },
    {
        field:'email', headerName:'Email', width: 230
    },
    {
        field:'age', headerName:'Age', width: 100
    },
    {
        field:'status', headerName:'Status', width: 160,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
];

export const userRows = [
    { 
        id: 1,
        userName: 'Snow',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35
    },
    { 
        id: 2,
        userName: 'Jamie Lannister', 
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'passive',
        email: '2snow@gmail.com', 
        age: 42 
    },
    { 
        id: 3,
        userName: 'Lannister',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'pending',
        email: '3snow@gmail.com',
        age: 45
    },
    { 
        id: 4,
        userName: 'Stark', 
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'active',
        email: '4snow@gmail.com', 
        age: 16 
    },
    { 
        id: 5,
        userName: 'Targaryen',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'passive',
        email: '5snow@gmail.com',
        age: 22
    },
    { 
        id: 6,
        userName: 'Melisandre', 
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'active',
        email: '6snow@gmail.com', 
        age: 15 
    },
    { 
        id: 7,
        userName: 'Clifford',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'passive',
        email: '7snow@gmail.com',
        age: 44
    },
    { 
        id: 8,
        userName: 'Frances', 
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'active',
        email: '8snow@gmail.com', 
        age: 36 
    },
    { 
        id: 9,
        userName: 'Roxie', 
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'pending',
        email: 'snow@gmail.com', 
        age: 65 
    },
    { 
        id: 10,
        userName: 'Roxie', 
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'active',
        email: 'snow@gmail.com', 
        age: 65 
    }
  ];