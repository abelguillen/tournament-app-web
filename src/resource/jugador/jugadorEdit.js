import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    Toolbar,
    SaveButton,
    required,
    TopToolbar,
    MenuItemLink
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const EditTitle = ({ record }) => {
  if(record && record.id){
    return <span>Editar jugador #{record.jugador.nombre}</span>
  }
  return <span>Cargando</span>;
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

const CustomToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);

export const JugadorEdit = ({ classes, ...props }) => {
    
    return (
        <Edit 
            actions={<BackActions/>}
            title={<EditTitle />}
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
            </SimpleForm>
        </Edit>
    )
};