
// Configure the Feathers services. (Can be re-generated.)
let users = require('./users/users.service');
// !code: imports 
let graphql = require('./graphql/graphql.service');
// !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  app.configure(users);
  // !code: func_return 
  app.configure(graphql);
  // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
