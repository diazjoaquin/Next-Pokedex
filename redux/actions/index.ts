import axios from 'axios';
import { Dispatch } from 'redux';

export enum YourActionTypes {
    GET_ALL_POKEMONS = 'GET_ALL_POKEMONS',
    GET_POKEMON_BYNAME = 'GET_POKEMON_BYNAME',
    GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL',
    GET_TYPES = 'GET_TYPES',
    CREATE_POKEMON = 'CREATE_POKEMON',
    FILTER_BY_TYPE = 'FILTER_BY_TYPE',
    FILTER_BY_CREATED = 'FILTER_BY_CREATED',
    ORDER_BY_NAME = 'ORDER_BY_NAME',
    ORDER_BY_ATTACK = 'ORDER_BY_ATTACK',
    DELETE_POKEMON = 'DELETE_POKEMON',
    CLEAR_DETAIL = 'CLEAR_DETAIL',
}



export const getPokemons = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await axios.get('/api/pokemons');
        
        return dispatch({
            type: YourActionTypes.GET_ALL_POKEMONS,
            payload: data
        });
        
    } catch (error) {
        throw new Error('Error fetching Pokemons!')
    }
};

export const getTypes = () =>  async (dispatch: Dispatch) => {
    try {

        const { data } = await axios.get('api/types');

        return dispatch({
            type: YourActionTypes.GET_TYPES,
            payload: data
        });

    } catch (error) {
        throw new Error('Error fetching Types!')
    }
};