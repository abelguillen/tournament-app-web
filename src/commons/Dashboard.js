import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import { 
    Datagrid,
    TextField,
    ReferenceArrayInput,
    SimpleForm,
} from 'react-admin';

const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Welcome = () => (
    <Card>
        <Typography variant="h3" gutterBottom>Bienvenido al Administrador de Torneos</Typography>
    </Card>
);

const TablaDePuntos = () => {
    return (
        <SimpleForm toolbar={false} variant={false}>
            <ReferenceArrayInput 
                label="Equipo A"
                source="equipoA" 
                reference="Jugadores"
            >
                <Datagrid key="jugador.id">
                    <TextField label="Nombre" source="jugador.nombre" />
                    <TextField label="PJ" source="jugador.pj" />
                    <TextField label="PG" source="jugador.pg" />
                    <TextField label="PE" source="jugador.pe" />
                    <TextField label="PP" source="jugador.pp" />
                    <TextField label="Bonus" source="jugador.bonus" />
                    <TextField label="Puntos" source="jugador.puntos" />
                </Datagrid>
            </ReferenceArrayInput>
        </SimpleForm>
    )
};

export default() => {
    return (
        <>
            <Welcome />
            <VerticalSpacer />
            <VerticalSpacer />
            <Typography variant="h5" gutterBottom>Lista de puntos</Typography>
            <VerticalSpacer />
            <TablaDePuntos/>
        </>
    );
};