import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import UserTable from './UserTable';

const ApplicationTwoContainer = ({ menuList, defaultMenuVerison, selector }) => {
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
            {currentComponent === "UsersTable" && <UserTable selector={selector} />}
        </div>
    )
}

export default ApplicationTwoContainer
