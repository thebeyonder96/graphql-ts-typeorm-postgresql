import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../Typedefs/User";
import { User } from "../../Entities/User";
import { MessageType } from "../Typedefs/Message";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        userName: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    async resolve(parent:any,args:any){
        const {name,userName,password} = args
        const USER = await User.insert({name,userName,password})
        return USER
    }
}

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: {type: GraphQLID}
    },
    async resolve(parent:any,args:any){
        const {id} = args;
        await User.delete(id)
        return {success: true, message: 'User deleted'}
    }
}

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        userName: {type: GraphQLString},
        oldPassword: {type: GraphQLString},
        newPassword: {type: GraphQLString}
    },
    async resolve(parent:any,args:any){
        const {userName,oldPassword,newPassword} = args;
        const USER = await User.findOne({where:{userName}})
        if(!USER) throw new Error("User not exist")
        if(USER?.password === oldPassword){
            const UPDATED = await User.update({userName},{password: newPassword})
            return {success: true, message: 'Password updated'}
        }else{
            throw new Error("Password does not match!")
        }
    }
}