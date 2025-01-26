import { GraphQLString } from "graphql";
import { UserType } from "../Typedefs/User";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        userName: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    resolve(parent:any,args:any){
        const {name,userName,password} = args
        return args
    }
}