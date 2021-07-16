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
    TopToolbar,
    ListButton,
    number
} from 'react-admin';
import { useState } from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const CreateTitle = () => {
    return <span>Crear partido</span>
};

const BackActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} icon={<ChevronLeft />} />
    </TopToolbar>
);

export const PartidoCreate = ({ classes, ...props }) => {
    const [bonusDisabled, setBonusDisabled] = useState(true);
    const [validateBonus, setValidateBonus] = useState([number()]);
    const [equipoA, setEquipoA] = useState();
    const [equipoB, setEquipoB] = useState();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Partido creado exitosamente`)
        redirect('/partidos');
        refresh();
    };

    const onFailure = (error) => {
        notify(`Ha ocurrido un error: ${error.message}`)
        redirect('/partidos');
        refresh();
    };

    const ganadorHandleChange = event => {
        var ganador = event.target.value;
        if(ganador == 'EMPATE') {
            setBonusDisabled(true);
            setValidateBonus([number()]);
        } else {
            setBonusDisabled(false);
            setValidateBonus([required(), number()]);
        }
    };

    const equipoAHandleChange = event => {
        setEquipoA(event.target.value);
    };

    const equipoBHandleChange = event => {
        setEquipoB(event.target.value);
    };

    const teamValidationA = (value, allValues) => {
        if(equipoB != null) {
            for (var i = 0; i < equipoB.length; i++) {
               if(allValues.equipoA[allValues.equipoA.length - 1] == equipoB[i]) {
                   return "El jugador solo puede pertenecer a un equipo";
               }
            }
            return undefined;
        } else {
            return undefined;
        }
    };

    const teamValidationB = (value, allValues) => {
        if(equipoA != null) {
            for (var i = 0; i < equipoA.length; i++) {
               if(allValues.equipoB[allValues.equipoB.length - 1] == equipoA[i]) {
                   return "El jugador solo puede pertenecer a un equipo";
               }
            }
            return undefined;
        } else {
            return undefined;
        }
    };
    
    const validateEquipoA = [required(), teamValidationA];
    const validateEquipoB = [required(), teamValidationB];

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
                    onChange={ganadorHandleChange}
                    choices={[
                        { id: 'A', name: 'A' },
                        { id: 'B', name: 'B' },
                        { id: 'EMPATE', name: 'Empate' }
                     ]}
                />
                <TextInput
                    validate={validateBonus}
                    label="Bonus"
                    source="partido.bonus"
                    fullWidth={false}
                    disabled={bonusDisabled}
                    defaultValue={0}
                />
                <ReferenceArrayInput 
                    validate={validateEquipoA}
                    label="Equipo A"
                    source="equipoA" 
                    reference="Jugadores"
                    onChange={equipoAHandleChange}
                    sort={{ field: 'nombre', order: 'ASC' }}
                >
                    <SelectArrayInput 
                        id="jugador.id"
                        name="jugador.nombre"
                        optionText="jugador.nombre" 
                    />
                </ReferenceArrayInput>
                <ReferenceArrayInput 
                    validate={validateEquipoB}
                    label="Equipo B"
                    source="equipoB"
                    reference="Jugadores"
                    onChange={equipoBHandleChange}
                    sort={{ field: 'nombre', order: 'ASC' }}
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