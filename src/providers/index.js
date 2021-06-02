
import { JugadorProvider } from './jugador';
import { PartidoProvider } from './partido';

// localhost
// const host = "http://localhost:8080";

// qashost
// const host = "https://tournament-app-ibiza-qas.herokuapp.com";

// prdhost
// const host = "https://tournament-app-ibiza-prd.herokuapp.com";

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