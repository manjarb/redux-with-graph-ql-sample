import { UPDATE_CATEGORY } from '../actions/actionTypes'

const category = (state = null, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return action.payload
    default:
      return state
  }
}

export default category
