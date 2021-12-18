import React, {useState, useEffect} from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {searchTrainings} from './Search'
import TextField from '@mui/material/TextField';
import {format, parseISO} from 'date-fns'


export default function TrainingList() {
    const [trainings, setTrainings] = useState([]);
    const [q, setQ] = React.useState('')
    
    useEffect(() => fetchData(), [])

    
    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }



    const columns = [
        {
            Header: 'Customer',
            accessor: 'customer',
            Cell: row => {
                return (
                    <div>
                        <span>{row.row.customer.firstname} </span>
                        <span>{row.row.customer.lastname}</span>
                    </div>
                )
            }
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Date',
            accessor: 'date',
            Cell: row => {
                return (
                    <div>
                        <span>{format(parseISO(row.value), "dd/MM/yyyy")}</span>
                    </div>
                )
            }
        },
        {
            Header: 'Time',
            accessor: 'date',
            Cell: row => {
                return (
                    <div>
                        <span>{format(parseISO(row.value), "HH:mm")}</span>
                    </div>
                )
            }
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            sortable : false,
            filterable: false,
            width: 100,
            accessor: 'id',
            Cell: row => <IconButton aria-label="delete" color="error" onClick={() => deleteTraining("https://customerrest.herokuapp.com/api/trainings/" + row.value)}><DeleteIcon /></IconButton>
        }
    ]

    return (
        <div>
            <TextField variant="standard" label="Search" value={q} onChange={(e) => setQ(e.target.value)} />
            <ReactTable data={searchTrainings(trainings, q)} columns={columns} />
        </div>
    )
}