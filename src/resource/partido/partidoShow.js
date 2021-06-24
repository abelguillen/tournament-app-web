import * as React from "react";
import { 
    Show, 
    SimpleShowLayout, 
    TextField, 
    DateField,
    Datagrid,
    ArrayField,
    TopToolbar,
    MenuItemLink,
    ListButton
} from 'react-admin';
import { Typography, Box } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const ShowTitle = ({ record }) => {
    if(record && record.id){
        return <span>Partido #{record.partido.nroPartido}</span>
    }
    return <span>Cargando</span>;
};

const jugadoresStyle = {
    marginTop : "revert"
};

const partidoStyle = {
    marginBottom : "revert"
};

const BackActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} icon={<ChevronLeft />} />
    </TopToolbar>
);

export const PartidoShow = (props) => (
    <Show 
        actions={<BackActions/>}
        title={<ShowTitle />}
        {...props}>
        <SimpleShowLayout
            {...props}
        >
            <Box p="1em">
                <Box display="flex">
                    <Box flex={2} mr="1em">
                        <Typography variant="h4" gutterBottom style={partidoStyle}>Partido</Typography>
                        <Box display="flex">
                            <Box flex={1} mr="0.5em">
                                <Typography variant="h6" gutterBottom>Fecha</Typography>
                                <DateField 
                                    label="Fecha"
                                    source="partido.fecha"
                                />
                            </Box>
                            <Box flex={1} ml="0.5em">
                                <Typography variant="h6" gutterBottom>Nro Partido</Typography>
                                <TextField 
                                    label="Nro Partido" 
                                    source="partido.nroPartido"
                                />
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box flex={1} mr="0.5em">
                                <Typography variant="h6" gutterBottom>Bonus</Typography>
                                <TextField 
                                    label="bonus" 
                                    source="partido.bonus" 
                                />
                            </Box>
                            <Box flex={1} ml="0.5em">
                                <Typography variant="h6" gutterBottom>Ganador</Typography>
                                <TextField 
                                    label="Ganador" 
                                    source="partido.ganador"
                                />
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box flex={1} mr="0.5em">
                                <Typography variant="h4" gutterBottom style={jugadoresStyle}>Jugadores</Typography>
                                <ArrayField 
                                    label="Jugadores"
                                    source="partido.jugadorEnPartido"
                                >
                                    <Datagrid>
                                        <TextField source="nombre" />
                                        <TextField source="equipo" />
                                    </Datagrid>
                                </ArrayField>
                            </Box>
                            <Box flex={1} mr="0.5em" />
                        </Box>
                    </Box>

                    <Box flex={1} ml="1em" />

                </Box>
            </Box>
        </SimpleShowLayout>
    </Show>
);