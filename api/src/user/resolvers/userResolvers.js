const { GraphQLScalarType } = require('graphql')

const userResolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'string de data e hora no formato ISO-8601',
    serialize: (value) => value.toISOSting(), // Serializa pega os dados que vem da base de dados e converte
    parseValue: (value) => new Date(value), // Pega o dado que vem de um input pra converter
    parseLiteral: (ast) => new Date(ast.value) // Pega dados que vem de um argumento inline
  }),
  Query: {
    // root, args, dataSource
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user:(root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id),
  },
  Mutation: {
    adcionaUser: async (root, user, { dataSources }) => 
    dataSources.usersAPI.adcionaUser(user),

    atualizaUser: async (root, novosDados, { dataSources }) =>
    dataSources.usersAPI.atualizaUser(novosDados),

    detelaUser: async (root, { id }, { dataSources }) => 
    dataSources.usersAPI.detelaUser(id)
  }
}

module.exports = userResolvers