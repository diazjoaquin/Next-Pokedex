import { YourActionTypes } from '../actions';

interface Pokemon {
    id: number
    name: string
    imgUrl: string
    hp: number
    defense: number
    attack: number
    speed: number
    height: number
    weight: number
    custom: boolean
    types: string[]
  }
  
  interface Types {
    id?: string
    name: string
  }
  export interface Details {
      id: number
      name: string
      imgUrl: string
      hp: number
      defense: number
      attack: number
      speed: number
      height: number
      weight: number
      custom: boolean
      types: string[]
  }
  
  export interface AppState {
    pokemons: Pokemon[],
    types: Types[], 
    details: {} | Details,
    filter: [],
    isLoading: boolean
  }
  
  const initialState : AppState = {
    pokemons: [],
    types: [],
    details: {},
    filter: [],
    isLoading: true
  
  }
  
  interface Action {
    type: string,
    payload: any
  }
  
  export const rootReducer = (state = initialState, action : Action) => {
    switch(action.type) {
      case YourActionTypes.GET_ALL_POKEMONS:
        return {
          ...state,
          pokemons: action.payload,
          filter: action.payload,
          isLoading: false
        };
  
      case YourActionTypes.GET_TYPES:
        return {
          ...state,
          types: action.payload
          
        };
  
      case YourActionTypes.GET_POKEMON_BYNAME:
        return {
          ...state,
          pokemons: state.filter.slice().filter((pokemon : Pokemon) => pokemon.name.includes(action.payload))  
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
  
      case YourActionTypes.GET_POKEMON_DETAIL:
  
      return {
        ...state,
        details: action.payload,
        isLoading: false
      }
      
    }
  };