import { GraphQLList } from "graphql";
import { UserType } from "../Typedefs/User";
import { User } from "../../Entities/User";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve(){
        return User.find()
    }
}