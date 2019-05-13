import { gql } from 'apollo-boost/lib/index'

import { UPDATE_CATEGORY } from './actionTypes'
import { updateError, resetError } from './error'
import client from '../../services/graphQl'

export const updateCategory = payload => ({
  type: UPDATE_CATEGORY,
  payload,
})

export const getCategory = categorySk => async (dispatch) => {
  try {
    const { data } = await client.query({
      query: gql`
          {
            category (sk: "${categorySk}") {
              pk
              sk
              coverImage
              name {
                en_US
                zh_HK
              }
              description {
                en_US
                zh_HK
              }
            }
          }
        `,
    })
    dispatch(updateCategory(data.category))
    dispatch(resetError())
  } catch (e) {
    dispatch(updateError(e.message))
  }
}
