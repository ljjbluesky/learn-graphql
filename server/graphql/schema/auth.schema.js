const makeExecutableSchema = require('graphql-tools')

const AuthType = `
  type Auth {
    id: ID!
    code: String
    name: String
    group: String
  }
`

const QuerySchema = `
  type Query {
  }
`

const MutationSchema = `
  type Mutation {
  }
`

module.exports = {
  AuthType
}