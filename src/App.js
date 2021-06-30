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
import { Login } from './layout';
import { Layout } from './layout';
import authProvider from './commons/authProvider';
import themeReducer from './commons/themeReducer';
import customRoutes from './commons/routes';

const dataProvider = RootProvider;

const App = () => (
    <Admin 
        title="Tournament App"
        dataProvider={dataProvider}
        customRoutes={customRoutes}
        customReducers={{ theme: themeReducer }}
        dashboard={Dashboard}
        loginPage={Login}
        authProvider={authProvider}
        layout={Layout}
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