import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const ApplicationOneContainer = ({ menuList, defaultMenuVerison, dispatch, addUser }) => {
    const [currentComponent, setCurrentComponent] = useState(defaultMenuVerison)
    return (
        <div>
            <AppBar position="fixed" sx={{}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        Application-1
                    </Typography>
                    {menuList.map((item, index) => (
                        <Button key={index} onClick={() => { setCurrentComponent(item) }} color="inherit">{item}</Button>
                    ))}
                </Toolbar>
            </AppBar>
            {currentComponent === "Login" && <LoginForm />}
            {currentComponent === "Registration" && <RegistrationForm dispatch={dispatch} addUser={addUser} />}
        </div>
    )
}

export default ApplicationOneContainer
