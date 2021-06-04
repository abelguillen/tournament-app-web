
import { JugadorProvider } from './jugador';
import { PartidoProvider } from './partido';

// START COMMANDS

// localhost
// REACT_APP_HOST="http://localhost:8080" npm start

// qashost
// REACT_APP_HOST="https://tournament-app-ibiza-qas.herokuapp.com" npm start

// prdhost
// REACT_APP_HOST="https://tournament-app-ibiza-prd.herokuapp.com" npm start

const host = process.env.REACT_APP_HOST;

const jugadorApiUrl = host + '/jugador';
const partidoApiUrl = host + '/partido';

var providers = {
  Jugadores: JugadorProvider(jugadorApiUrl),
  Partidos: PartidoProvider(partidoApiUrl),
}
export const RootProvider = (type, resource, params) => {
  return providers[resource][type](params);
}