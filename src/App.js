import * as React from "react";

import { Admin, Resource } from 'react-admin';
import { JugadorList } from './resource/jugador/jugadorList';
import { JugadorEdit } from './resource/jugador/jugadorEdit';
import { JugadorCreate } from './resource/jugador/jugadorCreate';
import { PartidoList } from './resource/partido/partidoList';
import { PartidoShow } from './resource/partido/partidoShow';
import { PartidoCreate } from './resource/partido/partidoCreate';
import { RootProvider } from './providers';
import Dashboard from './commons/Dashboard';
import { CustomTheme, lightTheme, darkTheme } from './commons/Theme';
import Menu from './commons/Menu';
import { Login } from './commons';
import authProvider from './commons/authProvider';

const dataProvider = RootProvider;

const App = () => (
    <Admin 
        title="Tournament App"
        menu={Menu}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        theme={CustomTheme}
        loginPage={Login}
        authProvider={authProvider}
    >
        <Resource 
            name="Jugadores" 
            list={JugadorList}
            edit={JugadorEdit}
            create={JugadorCreate}
        />

        <Resource
            name="Partidos"
            list={PartidoList}
            show={PartidoShow}
            create={PartidoCreate}
        />
    </Admin>
);

export default App;