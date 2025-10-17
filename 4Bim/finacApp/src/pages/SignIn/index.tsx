// -------------- Imports --------------
import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

// -------------- Definir tipos - Props --------------

type SignInProps = Record<string, never>;

type SignState = Record<string, never>;

/* -------------- Criação de Classes -------------- */

export default class SignIn extends Component<SignInProps, SignState>{

    render(){
        return(
            <View style={styles.container}>
                <Text>Tela de Login</Text>

            </View>
        );
    }
}

/* -------------- Criação dos Estilos -------------- */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    }
})