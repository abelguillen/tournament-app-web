import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    useNotify, 
    useRefresh, 
    useRedirect,
    SelectArrayInput,
    ReferenceArrayInput,
    DateInput,
    SelectInput,
    required,
    MenuItemLink,
    TopToolbar
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const CreateTitle = ({ record }) => {
    return <span>Crear partido</span>
};

const BackActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <MenuItemLink
            to="/partidos"
            primaryText="Atras"
            leftIcon={<ArrowBackIcon />}
        />
    </TopToolbar>
);

export const PartidoCreate = ({ classes, ...props }) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/partidos');
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
                    label="Nro Partido"
                    source="partido.nroPartido"
                    fullWidth={false}
                />
                <DateInput
                    validate={[required()]}
                    label="Fecha"
                    source="partido.fecha"
                    fullWidth={false}
                />
                <SelectInput 
                    label="Ganador" 
                    source="partido.ganador" 
                    validate={[required()]} 
                    choices={[
                        { id: 'A', name: 'A' },
                        { id: 'B', name: 'B' },
                        { id: 'EMPATE', name: 'Empate' }
                     ]}
                />
                <TextInput
                    validate={[required()]}
                    label="Bonus"
                    source="partido.bonus"
                    fullWidth={false}
                />
                <ReferenceArrayInput 
                    validate={[required()]}
                    label="Equipo A"
                    source="equipoA" 
                    reference="Jugadores"
                >
                    <SelectArrayInput 
                        id="jugador.id"
                        name="jugador.nombre"
                        optionText="jugador.nombre" 
                    />
                </ReferenceArrayInput>
                <ReferenceArrayInput 
                    validate={[required()]}
                    label="Equipo B"
                    source="equipoB"
                    reference="Jugadores"
                >
                    <SelectArrayInput 
                        id="jugador.id"
                        name="jugador.nombre"
                        optionText="jugador.nombre" 
                    />
                </ReferenceArrayInput>
            </SimpleForm>
        </Create>
    )
};