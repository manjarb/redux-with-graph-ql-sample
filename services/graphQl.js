import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://10.0.2.2:8801/graphql',
})

export default client
