import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


export default function EditCustomer(props) {

    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
    "firstname" : "",
    "lastname" : "",
    "streetaddress" : "",
    "postcode" : "",
    "city" : "",
    "email" : "",
    "phone" : "",
    })

    const handleClickOpen = () => {
        setCustomer({
        "firstname" : props.customer.firstname,
        "lastname" : props.customer.lastname,
        "streetaddress" : props.customer.streetaddress,
        "postcode" : props.customer.postcode,
        "city" : props.customer.city,
        "email" : props.customer.email,
        "phone" : props.customer.phone})
        setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value })
    }

    const save = () => {
        props.updateCustomer(customer, props.customer.links[0].href)
        handleClose()
    }

    return(
        <div>
            <IconButton variant="outlined" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Customer</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstname"
                        value={customer.firstname}
                        onChange={e => handleChange(e)}
                        label="First name"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="lastname"
                        value={customer.lastname}
                        onChange={e => handleChange(e)}
                        label="Last name"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="streetaddress"
                        value={customer.streetaddress}
                        onChange={e => handleChange(e)}
                        label="Street address"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="postcode"
                        value={customer.postcode}
                        onChange={e => handleChange(e)}
                        label="postcode"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="city"
                        value={customer.city}
                        onChange={e => handleChange(e)}
                        label="city"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        value={customer.email}
                        onChange={e => handleChange(e)}
                        label="E-mail"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        value={customer.phone}
                        onChange={e => handleChange(e)}
                        label="Phone"
                        fullWidth
                    />
                </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={save}>Save</Button>
                    </DialogActions>
            </Dialog>
    </div>
    )
}