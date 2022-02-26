const { ApolloServer } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')
const userResolvers = require('./user/resolvers/userResolvers')
const UserAPI = require('./user/datasource/user')


const typeDefs = [userSchema]
const resolvers = [userResolvers]

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UserAPI()
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server rodando na porta ${url}`)
}) 