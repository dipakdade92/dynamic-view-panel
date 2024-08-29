import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const RegistrationForm = ({ dispatch, addUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ email, password }))
    console.log('Signup Details:', { email, password, confirmPassword });
    alert('Signup Successfully!!')
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" align="center">Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationForm;