import { UPDATE_ERROR, RESET_ERROR } from '../actions/actionTypes'

const error = (state = null, action) => {
  switch (action.type) {
    case UPDATE_ERROR:
      return action.payload
    case RESET_ERROR:
      return state
    default:
      return state
  }
}

export default error
