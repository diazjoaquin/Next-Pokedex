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
    ORDER_BY_DEFENSE = 'ODER_BY_DEFENSE',
    DELETE_POKEMON = 'DELETE_POKEMON',
    CLEAR_DETAIL = 'CLEAR_DETAIL',
    CLEAR_FILTER = 'CLEAR_FILTER'
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

        const { data } = await axios.get('/api/types');

        return dispatch({
            type: YourActionTypes.GET_TYPES,
            payload: data
        });

    } catch (error) {
        throw new Error('Error fetching Types!')
    }
};

export const getPokemonByName = (name : string) => async (dispatch: Dispatch) => {
    try {

        const { data } = await axios.get(`/api/pokemon?name=${name}`);

        return dispatch({
            type: YourActionTypes.GET_POKEMON_BYNAME,
            payload: data
        })
        
    } catch (error) {
        throw new Error('Cannot get pokemon by name');
    }
};

export const filterByType = (payload: string) => (dispatch: Dispatch) => {
    try {

        return dispatch({
            type: YourActionTypes.FILTER_BY_TYPE,
            payload
        })
        
    } catch (error) {
        throw new Error('Cannot filter by type');
    }
};

export const clearFilter = () => async (dispatch: Dispatch) => {
    try {
        
        return dispatch({
            type: YourActionTypes.CLEAR_FILTER,
        })

    } catch (error) {
        throw new Error ('Cannot clear filters');
    }
};

export const orderByName = (payload: string) => (dispatch: Dispatch) => {
    try {

        return dispatch({
            type: YourActionTypes.ORDER_BY_NAME,
            payload
        })
        
    } catch (error) {
        throw new Error ('Error ordering by name');
        
    }
};

export const orderByAttack = (payload: string) => (dispatch: Dispatch) => {
    try {
        
        return dispatch({
            type: YourActionTypes.ORDER_BY_ATTACK,
            payload
        })

    } catch (error) {
        throw new Error ('Error ordering by name');
        
    }
};

export const orderByDefense = (payload: string) => (dispatch: Dispatch) => {
    try {
        
        return dispatch({
            type: YourActionTypes.ORDER_BY_DEFENSE,
            payload
        })

    } catch (error) {
        throw new Error ('Error ordering by name');
        
    }
};