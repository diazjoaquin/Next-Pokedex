import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { YourActionTypes } from '../actions';

export interface AppState {
  pokemons: [],
  types: [],
  details: {},
}

const initialState : AppState = {
  pokemons: [],
  types: [],
  details: {}
}

interface Action {
  type: string,
  payload: any
}

const rootReducer = (state = initialState, action : Action) => {
  switch(action.type) {
    case YourActionTypes.GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons:action.payload
      };
    case YourActionTypes.GET_TYPES:
      return {
        ...state,
        types: action.payload
      };
    case YourActionTypes.GET_POKEMON_BYNAME:
      return {
        ...state,
        pokemons: state.pokemons.filter((pokemon : any) => pokemon.name === action.payload.name)
      }
  }
}

const store = configureStore({
  reducer: rootReducer,
})

export type State = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>;
export default store;
