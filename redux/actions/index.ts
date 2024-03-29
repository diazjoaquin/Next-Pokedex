import axios from "axios";
import { Dispatch } from "redux";

export enum YourActionTypes {
  GET_ALL_POKEMONS = "GET_ALL_POKEMONS",
  GET_POKEMON_BYNAME = "GET_POKEMON_BYNAME",
  GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL",
  GET_TYPES = "GET_TYPES",
  CREATE_POKEMON = "CREATE_POKEMON",
  FILTER_BY_TYPE = "FILTER_BY_TYPE",
  FILTER_BY_CREATED = "FILTER_BY_CREATED",
  ORDER_BY_NAME = "ORDER_BY_NAME",
  ORDER_BY_ATTACK = "ORDER_BY_ATTACK",
  ORDER_BY_DEFENSE = "ODER_BY_DEFENSE",
  DELETE_POKEMON = "DELETE_POKEMON",
  GET_CURRENT_USER = "GET_CURRENT_USER",
  USE_CURRENT_USER = "USE_CURRENT_USER",
}

export const getPokemons = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get("/api/pokemons");

    return dispatch({
      type: YourActionTypes.GET_ALL_POKEMONS,
      payload: data,
    });
  } catch (error) {
    throw new Error("Error fetching Pokemons!");
  }
};

export const getTypes = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get("/api/types");

    return dispatch({
      type: YourActionTypes.GET_TYPES,
      payload: data,
    });
  } catch (error) {
    throw new Error("Error fetching Types!");
  }
};

export const getPokemonByName = (name: String) => async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: YourActionTypes.GET_POKEMON_BYNAME,
        payload: name,
      });
    } catch (error) {
      throw new Error("Cannot get pokemon by name");
    }
};

export const filterByType = (payload: String[]) => (dispatch: Dispatch) => {
  try {
    return dispatch({
      type: YourActionTypes.FILTER_BY_TYPE,
      payload,
    });
  } catch (error) {
    throw new Error("Cannot filter by type");
  }
};

export const orderByName = (payload: String) => (dispatch: Dispatch) => {
  try {
    return dispatch({
      type: YourActionTypes.ORDER_BY_NAME,
      payload,
    });
  } catch (error) {
    throw new Error("Error ordering by name");
  }
};

export const orderByAttack = (payload: String) => (dispatch: Dispatch) => {
  try {
    return dispatch({
      type: YourActionTypes.ORDER_BY_ATTACK,
      payload,
    });
  } catch (error) {
    throw new Error("Error ordering by name");
  }
};

export const orderByDefense = (payload: String) => (dispatch: Dispatch) => {
  try {
    return dispatch({
      type: YourActionTypes.ORDER_BY_DEFENSE,
      payload,
    });
  } catch (error) {
    throw new Error("Error ordering by name");
  }
};

export const getDetail = (id: String) => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get(`/api/pokemon/${id}`);

    return dispatch({
      type: YourActionTypes.GET_POKEMON_DETAIL,
      payload: data,
    });
  } catch (error) {
    throw new Error("Error getting Details");
  }
};

export const getCurrentUser = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get("api/current");

    return dispatch({
      type: YourActionTypes.GET_CURRENT_USER,
      payload: data,
    });
  } catch (error) {
    throw new Error("Cannot get current user");
  }
};

export const createPokemon = (form: any) => async (dispatch: Dispatch) => {
  try {
    const data = await axios.post("/api/create", form);

    return dispatch({
      type: YourActionTypes.CREATE_POKEMON,
    });
  } catch (error) {
    throw new Error("Error creating pokemon");
  }
};

export const deletePokemon = (id: String) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`/api/pokemon/${id}`);

    return dispatch({
      type: YourActionTypes.DELETE_POKEMON,
    });
  } catch (error) {
    throw new Error("Errror deleting pokemon");
  }
};
