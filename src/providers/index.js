
import { JugadorProvider } from './jugador';
import { PartidoProvider } from './partido';

const jugadorApiUrl = 'http://localhost:8080/jugador';
const partidoApiUrl = 'http://localhost:8080/partido';

var providers = {
  Jugadores: JugadorProvider(jugadorApiUrl),
  Partidos: PartidoProvider(partidoApiUrl),
}
export const RootProvider = (type, resource, params) => {
  return providers[resource][type](params);
}