import * as React from 'react';
import { MenuItemLink } from 'react-admin';
import { withRouter } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useMediaQuery, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';

const Menu = ({ onMenuClick, logout, dense = false }) => {

    const isXSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('xs')
    );

    const open = useSelector((state) => state.admin.ui.sidebarOpen);
    useSelector((state) => state.theme); // force rerender on theme change

    return (
        <Box mt={1}>
            {' '}
            <MenuItemLink
                to="/"
                primaryText="Inicio"
                leftIcon={<DashboardIcon />}
            />
            <MenuItemLink
                to="/jugadores"
                primaryText="Jugadores"
                leftIcon={<PersonIcon />}
            />
            <MenuItemLink
                to="/partidos"
                primaryText="Partidos"
                leftIcon={<SportsSoccerIcon />}
            />
            {isXSmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText="Configuracion"
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            )}
            {isXSmall && logout}
        </Box>
    );
}

export default withRouter(Menu);