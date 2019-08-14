import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()
import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => serverRuntimeConfig.GOOGLE_APPLICATION_CREDENTIALS
  }
}

const apolloServer = new ApolloServer(
  {
    typeDefs,
    resolvers
  }
)

export default apolloServer.createHandler(
  {
    path: '/api'
  }
)

export const config = {
  api: {
    bodyParser: false
  }
}
