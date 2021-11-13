import { CHANGE_AGE, CHANGE_COUNTRY, CHANGE_NAME } from "./UserActions"

const INITIAL_STATE = {
  name: 'John',
  age: 23,
  country: "NewZealand"
}

function reducers(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      }
    case CHANGE_AGE:
      return {
        ...state,
        age: action.age
      }
    case CHANGE_COUNTRY:
      return {
        ...state,
        country: action.country
      }
    default:
      return {...state}
  }
}

export default reducers;