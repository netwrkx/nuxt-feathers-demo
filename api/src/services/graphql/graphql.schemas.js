
// Define the combined GraphQL schema. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

let moduleExports = `
type User {
  id: ID
  email: String
  firstName: String
  lastName: String
  password: String
}
 

type Query {
  getUser(key: JSON, query: JSON, params: JSON): User
  findUser(query: JSON, params: JSON): [User]!
}
`;

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
