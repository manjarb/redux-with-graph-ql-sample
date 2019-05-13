import { RESET_ERROR, UPDATE_ERROR } from './actionTypes'

export const updateError = payload => ({
  type: UPDATE_ERROR,
  payload,
})

export const resetError = () => ({
  type: RESET_ERROR,
})
