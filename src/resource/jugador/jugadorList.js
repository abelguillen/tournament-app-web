import React from 'react';
import { 
  List, 
  Datagrid, 
  TextField,
  EditButton,
  downloadCSV,
  SimpleShowLayout,
} from 'react-admin';
import { unparse as convertToCSV } from 'papaparse';
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';
import Delete from '@material-ui/icons/Delete';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

const ListTitle = () => {
  return <span>Lista de Jugadores</span>;
};

const exporter = (props) => {
    const jugadorExport = props.map(jugador => {
        const {...jugadorExport } = jugador;
  
        jugadorExport.id = jugador.id;
        jugadorExport.nombre = jugador.jugador.nombre;
        jugadorExport.pj = jugador.jugador.pj;
        jugadorExport.pg = jugador.jugador.pg;
        jugadorExport.pe = jugador.jugador.pe;
        jugadorExport.pp = jugador.jugador.pp;
        jugadorExport.bonus = jugador.jugador.bonus;
        jugadorExport.puntos = jugador.jugador.puntos;
  
        return jugadorExport;
    });
    const csv = convertToCSV({
          data: jugadorExport,
          fields: [
              'id', 
              'nombre', 
              'pj', 
              'pg', 
              'pe', 
              'pp', 
              'bonus', 
              'puntos'
          ]
    });
    downloadCSV(csv, 'tabla_diegol');
}

const DeleteConfirmTitle = '¿Está seguro que desea eliminar al jugador?';

const DeleteConfirmContent = props => {
  return (
    <SimpleShowLayout {...props} />
  );
};

export const JugadorList = props => {
    return (
        <List 
            title={<ListTitle />}
            sort={{ field: 'puntos', order: 'DESC' }}
            exporter={exporter}
            bulkActionButtons={false}
            {...props}
        >
            <Datagrid key="{jugador.id}">
                <TextField 
                    label="Nombre" 
                    source="jugador.nombre"
                />
                <TextField 
                    label="PJ" 
                    source="jugador.pj" 
                />
                <TextField 
                    label="PG" 
                    source="jugador.pg" 
                />
                <TextField 
                    label="PE" 
                    source="jugador.pe" 
                />
                <TextField 
                    label="PP" 
                    source="jugador.pp" 
                />
                <TextField 
                    label="Bonus" 
                    source="jugador.bonus" 
                />
                <TextField 
                    label="Puntos" 
                    source="jugador.puntos" 
                />
                <EditButton />
                {/* <DeleteButton /> */}
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