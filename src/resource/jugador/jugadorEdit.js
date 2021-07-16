import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    Toolbar,
    SaveButton,
    required,
    TopToolbar,
    useNotify,
    useRefresh, 
    useRedirect,
    ListButton
} from 'react-admin';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const EditTitle = ({record}) => {
  if(record && record.id){
    return <span>Editar jugador #{record.jugador.nombre}</span>
  }
  return <span>Cargando</span>;
};

const BackActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} icon={<ChevronLeft />} />
    </TopToolbar>
);

const CustomToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);

export const JugadorEdit = ({ classes, ...props }) => {
    // const notify = useNotify();
    // const refresh = useRefresh();
    // const redirect = useRedirect();

    // const onSuccess = () => {
    //     notify(`Jugador modificado exitosamente`)
    //     redirect('/jugadores');
    //     refresh();
    // };

    // const onFailure = (error) => {
    //     notify(`Ha ocurrido un error: ${error.message}`)
    //     redirect('/jugadores');
    //     refresh();
    // };

    return (
        <Edit 
            actions={<BackActions/>}
            title={<EditTitle />}
            // onFailure={onFailure}
            // onSuccess={onSuccess}
            {...props}
        >
            <SimpleForm
                toolbar={<CustomToolbar/>}
                {...props}
            >
                <TextInput
                    validate={[required()]}
                    label="Nombre"
                    source="jugador.nombre"
                    fullWidth={false}
                />
                <TextInput
                    validate={[required()]}
                    label="PJ"
                    source="jugador.pj"
                    fullWidth={false}
                />
                <TextInput
                    validate={[required()]}
                    label="PG"
                    source="jugador.pg"
                    fullWidth={false}
                />
                <TextInput
                    validate={[required()]}
                    label="PE"
                    source="jugador.pe"
                    fullWidth={false}
                />
                <TextInput
                    validate={[required()]}
                    label="PP"
                    source="jugador.pp"
                    fullWidth={false}
                />
                <TextInput
                    validate={[required()]}
                    label="Bonus"
                    source="jugador.bonus"
                    fullWidth={false}
                />
                <TextInput
                    validate={[required()]}
                    label="Puntos"
                    source="jugador.puntos"
                    fullWidth={false}
                />
                <TextInput
                    validate={[required()]}
                    label="Efectividad"
                    source="jugador.efectividad"
                    fullWidth={false}
                />
            </SimpleForm>
        </Edit>
    )
};