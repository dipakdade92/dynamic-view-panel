import React from 'react';
import { Container, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const UserTable = ({ selector }) => {
  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Users Table
        </Typography>
        <Paper elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selector.users.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Container>
  );
};

export default UserTable;
