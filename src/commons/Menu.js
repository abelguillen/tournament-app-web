import * as React from 'react';
import { MenuItemLink } from 'react-admin';
import { withRouter } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import DashboardIcon from '@material-ui/icons/Dashboard';

const Menu = () => {
    return (
        <div>
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
        </div>
    );
}

export default withRouter(Menu);