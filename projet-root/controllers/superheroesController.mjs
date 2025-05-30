// controllers/superheroesController.mjs
import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, obtenerSuperheroePornombreReal } from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responsiveView.mjs';

export function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroe = obtenerSuperheroePorId(parseInt(id));

  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } else {
    res.status(404).send({ mensaje: "Superhéroe no encontrado" });
  }
}

// echo por mi borrar codigo primero
export function obtenerSuperheroePornombreRealController(req, res) {
  const {nombreReal} = req.params;
  const superheroe = obtenerSuperheroePornombreReal(nombreReal);

  if (superheroe) {
    res.send(renderizarListaSuperheroes(superheroe));
  } else {
    res.status(404).send({ mensaje: "Superheroe no encontrado por Anto"});
  }
}
// ... (resto del código)

export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
  }
}

export function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = obtenerSuperheroesMayoresDe30();

  res.send(renderizarListaSuperheroes(superheroes));
}