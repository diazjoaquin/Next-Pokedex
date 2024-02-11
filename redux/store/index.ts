import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { YourActionTypes } from '../actions';

interface Pokemon {
  name: string
  defense: string
  attack: string
}

export interface AppState {
  pokemons: Pokemon[],
  types: [],
  details: {},
  filter: []
}

const initialState : AppState = {
  pokemons: [],
  types: [],
  details: {},
  filter: []

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
        pokemons: action.payload,
        filter: action.payload
      };

    case YourActionTypes.GET_TYPES:
      return {
        ...state,
        types: action.payload
      };

    case YourActionTypes.GET_POKEMON_BYNAME:
      return {
        ...state,
        pokemons: state.filter.slice().filter((pokemon : any) => pokemon.name.includes(action.payload.name))  
      }

    case YourActionTypes.FILTER_BY_TYPE:

    if (Array.isArray(action.payload) && action.payload.length > 0) {
      const result = action.payload.length === 1 ?  
      state.filter.slice().filter((pokemon: any) => pokemon.types.includes(action.payload[0])) : 
      state.filter.slice().filter((pokemon: any) => pokemon.types.includes(action.payload[0]) && 
      pokemon.types.includes(action.payload[1]));;

      return {
        ...state,
        pokemons: result
      }
    }

    return {
      ...state,
      pokemons: [...state.filter]
    }

    case YourActionTypes.ORDER_BY_NAME:

      const names = action.payload === "A-Z" ? 
        state.pokemons.slice().sort((a ,b) => {
          if(a.name > b.name) return 1
          if(a.name < b.name) return -1
          return 0
        }) :
        state.pokemons.slice().sort((a,b) => {
          if(a.name < b.name) return 1
          if(a.name > b.name) return -1
          return 0
      });

      return {
        ...state,
        pokemons: names
      }

    case YourActionTypes.ORDER_BY_ATTACK: 

      const attack = action.payload === "Min-Max" ? 
      state.pokemons.slice().sort((a ,b) => {
        if(a.attack > b.attack) return 1
        if(a.attack < b.attack) return -1
        return 0
      }) :
      state.pokemons.slice().sort((a,b) => {
        if(a.attack < b.attack) return 1
        if(a.attack > b.attack) return -1
        return 0
    });

      return {
        ...state,
        pokemons: attack
      }

    case YourActionTypes.ORDER_BY_DEFENSE: 

    const defense = action.payload === "Min-Max" ? 
      state.pokemons.slice().sort((a ,b) => {
        if(a.defense > b.defense) return 1
        if(a.defense < b.defense) return -1
        return 0
      }) :
      state.pokemons.slice().sort((a,b) => {
        if(a.defense < b.defense) return 1
        if(a.defense > b.defense) return -1
        return 0
    });

      return {
        ...state,
        pokemons: defense
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
