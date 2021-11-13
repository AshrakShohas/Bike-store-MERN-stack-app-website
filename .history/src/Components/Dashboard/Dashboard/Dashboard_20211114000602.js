import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./Dashboard.css"

import DashboardHome from './DashboardHome/DashboardHome';


import {
    Switch,

    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Payment from './Payment/Payment';
import useAuth from './../../../hooks/useAuth';
import Allorders from './../../Allorders/Allorders';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import UserRoute from './../../Login/UserRoute/UserRoute'
import AddReview from './Review/AddReview/AddReview';
import Addproducts from './AddProducts/Addproducts';
import ManageProducts from './ManageProducts/ManageProducts/ManageProducts';
const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { logOut } = useAuth()

    let { path, url } = useRouteMatch();

    const { admin, user } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='drawer' >
            <Toolbar className='toolbar'>
                <div >
                    <i className="fas fa-user"></i><span >  {user?.displayName} </span>
                </div>
            </Toolbar >
            <Divider />
            <ul style={{ textAlign: "left" }} >
                <li className="dashboardLink"><Link to="/home" style={{ textDecoration: "none", color: 'white' }}> Home </Link></li>

                <li className="dashboardLink"><Link to={`${url}/makeAdmin`} style={{ textDecoration: "none", color: 'white' }} > Make Admin</Link></li>
                {
                    admin && <Box>
                       
                        <li className="dashboardLink"><Link to={`${url}/allorders`} style={{ textDecoration: "none", color: 'white' }} > Manage All Orders</Link></li>
                        <li className="dashboardLink"><Link to={`${url}/addbikes`} style={{ textDecoration: "none", color: 'white' }} > Add A Bike</Link></li>
                        <li className="dashboardLink"><Link to={`${url}/manageproducts`} style={{ textDecoration: "none", color: 'white' }} > Manage Products</Link></li>

                    </Box>
                }

                {
                    !admin && <Box>
                        <li className="dashboardLink"><Link to={`${url}`} style={{ textDecoration: "none", color: 'white' }} >My Orders</Link></li>
                        <li className="dashboardLink"><Link to={`${url}/payment`} style={{ textDecoration: "none", color: 'white' }} > Payment</Link></li>
                        <li className="dashboardLink"><Link to={`${url}/review`} style={{ textDecoration: "none", color: 'white' }} > Review</Link></li>
                    </Box>
                }

                <Divider />
                <li className="dashboardLink"> <Link to="/" onClick={logOut} style={{ textDecoration: "none", color: 'white' }}><i className="fas fa-sign-out-alt"></i> Log Out</Link></li>
            </ul>


            <Divider />

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                style={{ backgroundColor: "#212529" }}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },

                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Switch>
                    <UserRoute exact path={path} >
                        <DashboardHome></DashboardHome>
                    </UserRoute>

                    <UserRoute path={`${path}/payment`}>
                        <Payment></Payment>
                    </UserRoute>
                    <UserRoute path={`${path}/review`}>
                        <AddReview></AddReview>
                    </UserRoute>

                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <AdminRoute path={`${path}/allorders`}>
                        <Allorders></Allorders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addbikes`}>
                        <Addproducts></Addproducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
