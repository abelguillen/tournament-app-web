import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import { 
    Datagrid,
    TextField,
    ReferenceArrayInput,
    SimpleForm,
    useQueryWithStore,
    List,
    ArrayField,
    Loading, 
    Error,
    Show,
    SimpleShowLayout,
    SimpleList,
    useListContext,
    CreateButton
} from 'react-admin';
import CardContent from "@material-ui/core/CardContent";
import { useState } from 'react';
import keyBy from 'lodash/keyBy'
import { JugadorList } from '../resource/jugador/jugadorList';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Welcome = () => (
    <Card>
        <CardContent>
            <Typography variant="h3" >Bienvenido al Administrador de Torneos</Typography>
        </CardContent>
    </Card>
);

const ListTitle = () => {
    return <span></span>;
};

const Empty = () => {
    const { basePath, resource } = useListContext();
    return (
        <Box textAlign="center" m={1}>
            <Typography variant="h4" paragraph>
                No hay jugadores cargados
            </Typography>
            <Typography variant="body1">
                Acceder al modulo "Jugadores" para comenzar con la carga
            </Typography>
        </Box>
    );
};

const TablaDePuntos = ({data}, props) => {
    return (
        <List 
            {...props} 
            basePath="/" 
            resource="Jugadores"
            bulkActionButtons={false}
            exporter={false}
            pagination={false}
            actions={false}
            sort={{ field: 'puntos', order: 'DESC' }}
            title={<ListTitle />}
            empty={<Empty />}
        >
            <Datagrid key="id">
                <TextField 
                    label="Nombre" 
                    source="jugador.nombre"/>
                <TextField 
                    label="PJ" 
                    source="jugador.pj" 
                />
                <TextField 
                    label="PG" 
                    source="jugador.pg" 
                />
                <TextField 
                    label="PE" 
                    source="jugador.pe" 
                />
                <TextField 
                    label="PP" 
                    source="jugador.pp" 
                />
                <TextField 
                    label="Bonus" 
                    source="jugador.bonus" 
                />
                <TextField 
                    label="Puntos" 
                    source="jugador.puntos" 
                />
            </Datagrid>
        </List>
        // <div>
        //     {data ? data.map((record) => (
        //         <TextField source={record.jugador.nombre} />
        //     )) : null}
        // </div>
    )
};

export default() => {

    const { data, loading, error } = useQueryWithStore({
        type: 'getList',
        resource: 'Jugadores',
        payload: {
            filter: {},
            sort: { field: 'nombre', order: 'DESC' },
            pagination: { page: 1, perPage: 100 },
        },
    });

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!data) return null;

    return (
        <>
            <Welcome />
            <Card>
                {data ? (
                    <CardContent>
                        <Typography variant="h5" gutterBottom>Lista de puntos</Typography>
                        <TablaDePuntos data={data}/>
                    </CardContent>
                ) : (
                    <Typography variant="h5" gutterBottom>Sin datos</Typography>
                )}
            </Card>
        </>
    );
};