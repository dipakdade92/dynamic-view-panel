import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useDispatch, useSelector } from 'react-redux';
import { appJson } from './applicationJson';
import { addUser, loadApp } from './store';
import ApplicationOneContainer from "mf_1/ApplicationOneContainer"
import ApplicationTwoContainer from "mf_2/ApplicationTwoContainer"

const drawerWidth = 240;

export default function Menu() {
    const { menu, currentApp, defaultMenuVerison } = useSelector((state) => state.app);
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.app)

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <Typography variant="h5" noWrap sx={{ textAlign: "center", marginTop: "25px", marginBottom: "10px" }}>
                        Applications
                    </Typography>
                    <Divider />
                    <List>
                        {appJson &&
                            appJson.applications.map((appConfig) => (
                                <ListItem key={appConfig.name} disablePadding>
                                    <ListItemButton key={appConfig.name}
                                        onClick={() => { dispatch(loadApp({ app: appConfig.name, menu: appConfig.menu, defaultMenuVerison: appConfig.version })) }}
                                    >
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={appConfig.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {!currentApp &&
                    <AppBar position="fixed" sx={{}}>
                        <Toolbar>
                            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                                Dynamic React App
                            </Typography>
                            {[].map((item, index) => (
                                <Button key={index} onClick={() => { setCurrentComponent(item) }} color="inherit">{item}</Button>
                            ))}
                        </Toolbar>
                    </AppBar>}
                {
                    currentApp == "Application-1" && <ApplicationOneContainer menuList={menu} defaultMenuVerison={defaultMenuVerison} dispatch={dispatch} addUser={addUser} />
                }
                {
                    currentApp == "Application-2" && <ApplicationTwoContainer menuList={menu} defaultMenuVerison={defaultMenuVerison} selector={selector} />
                }
            </Box>

        </Box>
    );
}
