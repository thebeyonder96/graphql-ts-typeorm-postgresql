import { GraphQLObjectType, GraphQLSchema } from "graphql";

const ROOT_QUERY = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {}
})

const MUTATION = new GraphQLObjectType({
    name: 'Mutation',
    fields: {}
})

export const SCHEMA = new GraphQLSchema({
    query: ROOT_QUERY,
    mutation: MUTATION
})