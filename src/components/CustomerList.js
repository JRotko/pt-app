import React, {useState, useEffect} from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCustomer from './AddCustomer'
import EditCustomer from './EditCustomer'
import Search, {searchCustomers} from './Search'
import TextField from '@mui/material/TextField';


export default function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [q, setQ] = React.useState('')
    
    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
    }

    


    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstname'
        },
        {
            Header: 'Last Name',
            accessor: 'lastname'
        },
        {
            Header: 'Street Address',
            accessor: 'streetaddress'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'E-mail',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            sortable : false,
            filterable: false,
            width: 100,
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        {
            sortable : false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <IconButton aria-label="delete" color="error" onClick={() => deleteCustomer(row.value)}><DeleteIcon /></IconButton>
        }
    ]

    return (
        <div>
            <AddCustomer saveCustomer={saveCustomer}/>
            <TextField variant="standard" label="Search" value={q} onChange={(e) => setQ(e.target.value)} />
            <ReactTable data={searchCustomers(customers, q)} columns={columns} />
        </div>
    )
}