// -------------- Imports --------------
import React, { Component } from "react";
import { View, ActivityIndicator} from "react-native";

import AuthRoutes from './auth.routes';

type RouterProps = Record<string, never>

type RouteState = {
    loading: boolean,
    signed: boolean,
}

export default class Routes extends Component<RouterProps, RouteState>{
    state: RouteState = {
        loading: false,
        signed: false,
    };

    render(){
        const signed = this.state.signed;

        return signed? <View></View> : <AuthRoutes/> 
    }
}