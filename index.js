const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");

const server = new ApolloServer({
  ...graphql,
  formatError: (err) => {
    if (err.message.startsWith("Usuario Existente")){
      return Error(err.message);
    }

    return err;
  },
});

server.listen().then(({ url }) => console.log(url));