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
    useListContext
} from 'react-admin';
import CardContent from "@material-ui/core/CardContent";
import keyBy from 'lodash/keyBy'

const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Welcome = () => (
    <Card>
        <CardContent>
            <Typography variant="h3" >Bienvenido al Administrador de Torneos</Typography>
        </CardContent>
    </Card>
);

const TablaDePuntos = (data) => {

    return (
        <div>
            {/* {data ? data.map((record) => (
                <TextField source={record.jugador.nombre} />
            )) : null} */}
        </div>
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