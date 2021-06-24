import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    useNotify, 
    useRefresh, 
    useRedirect,
    required,
    TopToolbar,
    ListButton,
    maxLength
} from 'react-admin';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const CreateTitle = () => {
    return <span>Crear jugador</span>
};

const BackActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} icon={<ChevronLeft />} />
    </TopToolbar>
);

export const JugadorCreate = ({ classes, ...props }) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Jugador creado exitosamente`)
        redirect('/jugadores');
        refresh();
    };

    const onFailure = (error) => {
        notify(`Ha ocurrido un error: ${error.message}`)
        redirect('/jugadores');
        refresh();
    };

    return (
        <Create 
            actions={<BackActions/>}
            onSuccess={onSuccess}
            onFailure={onFailure}
            title={<CreateTitle />}
            {...props}
        >
            <SimpleForm
                {...props} 
            >
                <TextInput
                    validate={[required(), maxLength(15)]}
                    label="Nombre"
                    source="jugador.nombre"
                    fullWidth={false}
                />
            </SimpleForm>
        </Create>
    )
};