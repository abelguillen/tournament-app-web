import React from 'react';
import { 
  List, 
  Datagrid, 
  TextField,
  DateField,
  ShowButton
} from 'react-admin';

const ListTitle = () => {
  return <span>Lista de Partidos</span>;
};

export const PartidoList = props => {
    return (
        <List 
            title={<ListTitle />}
            // sort={{ field: 'puntos', order: 'DESC' }}
            bulkActionButtons={false}
            exporter={false}
            {...props}
        >
            <Datagrid key="{partido.id}">
                <DateField 
                    label="Fecha"
                    source="partido.fecha" 
                />
                <TextField 
                    label="Nro Partido" 
                    source="partido.nroPartido"
                />
                <TextField 
                    label="Bonus" 
                    source="partido.bonus" 
                />
                <TextField 
                    label="Ganador" 
                    source="partido.ganador"
                />
                <ShowButton/>
            </Datagrid>
        </List>
    )
};