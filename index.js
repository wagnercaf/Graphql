const { ApolloServer} = require("apollo-server");

const {typeDefs, resolvers} = require("graphql");

const server = new ApolloServer({    
    typeDefs, resolvers
});

server.listen().then(({URL}) => console.log(URL));
