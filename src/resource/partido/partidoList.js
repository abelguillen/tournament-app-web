import React from 'react';
import { 
  List, 
  Datagrid, 
  TextField,
  DateField,
  ShowButton,
  SimpleShowLayout
} from 'react-admin';
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';
import Delete from '@material-ui/icons/Delete';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

const ListTitle = () => {
  return <span>Lista de Partidos</span>;
};

const DeleteConfirmTitle = '¿Está seguro que desea eliminar el partido?';

const DeleteConfirmContent = props => {
  return (
    <SimpleShowLayout {...props} />
  );
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
                    locales='es-419'
                    //showTime
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
                <DeleteWithCustomConfirmButton
                    title={DeleteConfirmTitle}
                    content={DeleteConfirmContent}
                    confirmColor='warning'
                    ConfirmIcon={Delete}
                    cancel='Cancelar'
                    CancelIcon={ErrorOutline}
                    undoable={true}
                />
            </Datagrid>
        </List>
    )
};