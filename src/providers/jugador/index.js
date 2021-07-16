import axios from 'axios';
import * as _ from 'lodash';

import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
  GET_MANY
} from 'react-admin';

const fieldsMapping = {
  'jugador.id': 'id',
  'jugador.nombre': 'nombre',
  'jugador.pj': 'pj',
  'jugador.pg': 'pg',
  'jugador.pe': 'pe',
  'jugador.pp': 'pp',
  'jugador.bonus': 'bonus',
  'jugador.puntos': 'puntos',
  'jugador.efectividad': 'efectividad',
  'id': 'id',
  'nombre': 'nombre',
  'pj': 'pj',
  'pg': 'pg',
  'pe': 'pe',
  'pp': 'pp',
  'bonus': 'bonus',
  'puntos': 'puntos',
  'efectividad': 'efectividad'
}

export const JugadorProvider=(apiUrl)=>{ 

  return {
    [GET_LIST]:(params) =>{
      let sortField = '';
      const sortFieldLocal = _.get(params, 'sort.field')
      if(sortFieldLocal){
        sortField = fieldsMapping[sortFieldLocal];
      }
      const sortOrder = _.get(params, 'sort.order')

      return axios.get(`${apiUrl}/list`, {
        params: {
          sort_field: sortField,
          sort_order: sortOrder
        }
      })
      .then((response)=>{
        return {
          data: response.data.map((jugador)=>{
            return {
              jugador,
              id: jugador.id
            }
          }),
          total: response.data.length
        }
      })
    },
    [GET_ONE]:(params)=>{
      return axios.get(`${apiUrl}/${params.id}`)
      .then((response)=>{
        let jugador = response.data;
        return {
          data: {
            jugador,
            id: jugador.id
          }
        }
      })
    },
    [CREATE]:(params)=>{
      var jugador = {
        nombre: params.data.jugador.nombre,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        bonus: 0,
        puntos: 0,
        efectividad: "0%"
    }
      return axios.post(`${apiUrl}/create`, jugador)
      .then((response)=>{
        let jugador = response.data;
        return {
          data: {
            jugador,
            id: jugador.id
          }
        }
      })
    },
    [UPDATE]:(params)=>{
      return axios.put(`${apiUrl}/update`, params.data.jugador)
      .then((response)=>{
        let jugador = response.data;
        return {
          data: {
            jugador,
            id: jugador.id
          }
        }
      })
    },
    [DELETE]:(params)=>{
      return axios.delete(`${apiUrl}/delete`, {
        params: {
          id: params.id
        }
      })
      .then((response)=>{
        let jugador = response.data;
        return {
          data: {
            jugador,
            id: jugador.id
          }
        }
      })
    },
    [GET_MANY]:(params) =>{
      let sortField = '';
      const sortFieldLocal = _.get(params, 'sort.field')
      if(sortFieldLocal){
        sortField = fieldsMapping[sortFieldLocal];
      }
      const sortOrder = _.get(params, 'sort.order')

      return axios.get(`${apiUrl}/list`, {
        params: {
          sort_field: sortField,
          sort_order: sortOrder
        }
      })
      .then((response)=>{
        return {
          data: response.data.map((jugador)=>{
            return {
              jugador,
              id: jugador.id
            }
          }),
          total: response.data.length
        }
      })
    }
    /*[DELETE_MANY]:(params)=>{
      const ids = params.ids;
      const promises = [];
      for (const id of ids) {
        promises.push(axios.delete(`${apiUrl}/functionalities-management/${id}`, {
          headers : headers
        })
          .then((response)=>{
            let item = response.data.data;
            if(Array.isArray(item)){
              console.log('extract item from array in DELETE_MANY response')
              item = item[0];
            }
            return {
              item,
              id: item.id_functionality
            }
          })
        )
      }
      return Promise.all(promises).then((items)=>{ 
        return {
          data: items
        }
      })
      
    }*/
  }
}