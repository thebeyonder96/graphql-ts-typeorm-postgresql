import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { CREATE_USER } from "./Mutations/User";

const ROOT_QUERY = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllUsers: GET_ALL_USERS
    }
})

const MUTATION = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER
    }
})

export const SCHEMA = new GraphQLSchema({
    query: ROOT_QUERY,
    mutation: MUTATION
})