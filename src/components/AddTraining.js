import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {startOfToday} from 'date-fns'

export default function AddTraining(props) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
    "date" : new Date(startOfToday()),
    "activity" : "",
    "duration" : "",
    "customer" : props.customer.links[0].href,
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setTraining({...training, [e.target.name]: e.target.value })
    }

    const handleDateChange = (date) => {
        setTraining({...training, date: date})
    }

    const setCustomer = () => {
        setTraining({...training, customer: props.customer.links[0].href})
    }

    const save = () => {
        setCustomer()
        console.log(training)
        props.saveTraining(training)
        handleClose()
    }

    return(
        <div>
            <Button variant="outlined" onClick={handleClickOpen} style={{margin: 10}}>
                Add training
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Training</DialogTitle>
                <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            label="Basic example"
                            name="date"
                            value={training.date}
                            onChange={e => handleDateChange(e)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    
                        <TextField
                            margin="dense"
                            name="activity"
                            value={training.activity}
                            onChange={e => handleChange(e)}
                            label="Activity"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            name="duration"
                            value={training.duration}
                            onChange={e => handleChange(e)}
                            label="Duration"
                            fullWidth
                        />
                    </LocalizationProvider>
                </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={save}>Save</Button>
                    </DialogActions>
            </Dialog>
    </div>
    )
}