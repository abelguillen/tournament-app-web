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
    MenuItemLink
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const CreateTitle = ({ record }) => {
    return <span>Crear jugador</span>
};

const BackActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <MenuItemLink
            to="/jugadores"
            primaryText="Atras"
            leftIcon={<ArrowBackIcon />}
        />
    </TopToolbar>
);

export const JugadorCreate = ({ classes, ...props }) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/jugadores');
        refresh();
    };

    return (
        <Create 
            actions={<BackActions/>}
            onSuccess={onSuccess}
            title={<CreateTitle />}
            {...props}
        >
            <SimpleForm
                {...props} 
            >
                <TextInput
                    validate={[required()]}
                    label="Nombre"
                    source="jugador.nombre"
                    fullWidth={false}
                />
            </SimpleForm>
        </Create>
    )
};