// -------------- Imports --------------
import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

// -------------- Definir tipos - Props --------------

type SignUpProps = Record<string, never>;

type SignUpState = Record<string, never>;

/* -------------- Criação de Classes -------------- */

export default class SignUp extends Component<SignUpProps, SignUpState>{

    render(){
        return(
            <View style={styles.container}>
                <Text>Tela de Cadastro</Text>
                
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