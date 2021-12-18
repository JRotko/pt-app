import { CSVLink } from "react-csv";
import Button from '@mui/material/Button';

export default function ExportCsv(props) {
    const data = props.customers

    const headers = [
        { label: 'First name', key: 'firstname'},
        { label: 'Last name', key: 'lastname'},
        { label: 'Street Address', key: 'streetaddress'},
        { label: 'City', key: 'city'},
        { label: 'e-mail', key: 'email'},
        { label: 'Phone', key: 'phone'},
    ]

    const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: data
    }

    return (
        
        <CSVLink {...csvReport}><Button variant="outlined">Export as CSV</Button></CSVLink>
    )
}