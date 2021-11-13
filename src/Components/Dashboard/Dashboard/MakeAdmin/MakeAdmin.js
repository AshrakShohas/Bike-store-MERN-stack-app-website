import React from 'react';
import { TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlure = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true)
                }
            })


        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: "40%" }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlure}
                    variant="standard" />
                <Button type='submit' variant="contained">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made Admin Successfully!!!</Alert>
            }
        </div >
    );
};

export default MakeAdmin;