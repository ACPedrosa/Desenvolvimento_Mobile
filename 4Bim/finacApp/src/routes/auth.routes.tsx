/* 
    Arquivo que gerencia o acesso do usuário
*/

// -------------- Imports --------------
import React, { Component } from "react";
import { createStackNavigator } from '@react-navigation/stack'; 
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export type AuthStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

type AuthRoutesProps = Record<string, never>;
type AuthRoutesState = Record<string, never>;

export default class AuthRoutes extends Component<AuthRoutesProps,AuthRoutesState>{
    render() {
        return(
            <AuthStack.Navigator screenOptions={{headerShown: false}}>
                <AuthStack.Screen name="SignIn" component={SignIn}></AuthStack.Screen>
                <AuthStack.Screen name="SignUp" component={SignUp}></AuthStack.Screen>
            </AuthStack.Navigator>
        );
    }
}


