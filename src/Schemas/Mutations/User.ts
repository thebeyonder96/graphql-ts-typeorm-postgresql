import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../Typedefs/User";
import { User } from "../../Entities/User";
import { MessageType } from "../Typedefs/Message";
import { PASSWORD_NOT_MATCHING, PASSWORD_UPDATE_ERROR, PASSWORD_UPDATED, USER_DELETED, USER_NOT_EXIST, USERNAME_EXISTS } from "../../locale";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        userName: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    async resolve(parent:any,args:any){
        const {name,userName,password} = args
        const USER = new User()
        USER.name = name
        USER.userName = userName
        USER.password = password
        const EXISTING = await User.findOne({where:{userName}})
        if(EXISTING) throw new Error(USERNAME_EXISTS)
        const NEW_USER = await USER.save()
        return NEW_USER
    }
}

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: {type: GraphQLID}
    },
    async resolve(parent:any,args:any){
        const {id} = args;
        const deleted = await User.delete(id)
        return {success: true, message: USER_DELETED}
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
        if(!USER) throw new Error(USER_NOT_EXIST)
        if(USER?.password === oldPassword){
            const UPDATED = await User.update({userName},{password: newPassword})
            if(!UPDATED.affected) throw new Error(PASSWORD_UPDATE_ERROR)
            return {success: true, message: PASSWORD_UPDATED}
        }else{
            throw new Error(PASSWORD_NOT_MATCHING)
        }
    }
}