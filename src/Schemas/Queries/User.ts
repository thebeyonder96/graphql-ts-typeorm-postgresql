import { GraphQLList } from "graphql";
import { UserType } from "../Typedefs/User";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve(){
        return ['Akshay']
    }
}