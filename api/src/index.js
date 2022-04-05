const { ApolloServer } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')


const users = [
  {
    nome: 'Ana',
    ativo: true
  },
  {
    nome: 'Marcia',
    ativo: false
  }
]
//
const typeDefs = [userSchema]
const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({url}) => {
  console.log(`Servidor rodando na prota ${url}`)
})
