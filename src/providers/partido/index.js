import axios from 'axios';
import * as _ from 'lodash';

import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
} from 'react-admin';

const fieldsMapping = {
  'partido.fecha': 'fecha',
  'partido.nroPartido': 'nroPartido',
  'partido.bonus': 'bonus',
  'partido.ganador': 'ganador'
}

export const PartidoProvider=(apiUrl)=>{ 

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
          data: response.data.map((partido)=>{
            return {
              partido,
              id: partido.id
            }
          }),
          total: response.data.length
        }
      })
    },
    [GET_ONE]:(params)=>{
      return axios.get(`${apiUrl}/${params.id}`)
      .then((response)=>{
        let partido = response.data;
        return {
          data: {
            partido,
            id: partido.id
          }
        }
      })
    },
    [CREATE]:(params)=>{
      var jugador = {
        nroPartido: params.data.partido.nroPartido,
        equipoA: params.data.equipoA,
        equipoB: params.data.equipoB,
        ganador: params.data.partido.ganador,
        bonus: params.data.partido.bonus
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
    // [UPDATE]:(params)=>{
    //   return axios.put(`${apiUrl}/update`, params.data.jugador)
    //   .then((response)=>{
    //     let jugador = response.data;
    //     return {
    //       data: {
    //         jugador,
    //         id: jugador.id
    //       }
    //     }
    //   })
    // },
    // [DELETE]:(params)=>{
    //   return axios.delete(`${apiUrl}/delete`, {
    //     params: {
    //       id: params.id
    //     }
    //   })
    //   .then((response)=>{
    //     let jugador = response.data;
    //     return {
    //       data: {
    //         jugador,
    //         id: jugador.id
    //       }
    //     }
    //   })
    // },
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