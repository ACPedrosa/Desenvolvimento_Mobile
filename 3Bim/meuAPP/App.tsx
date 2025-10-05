import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

interface State{
  valor: number
}


export default class App extends Component <{}, State> {
  constructor(props: {}){
    super(props);
    this.state = {valor:50}
  }

  handleSlidingComplete = (valorFinal: number) => {

  }

  render(){
    return (
      <View style={styles.container}>
      <Text style={styles.logo}> Exemplo Slider</Text>
      

      <Slider
        style= {{width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        value={this.state.valor}
        onValueChange={(valor => this.setState({valor}))}
        onSlidingComplete={this.handleSlidingComplete}
        minimumTrackTintColor="#eeec7e"
        maximumTrackTintColor = "#8E8E93"
      />

      <Text style={styles.valor}>
        Valor -- {this.state.valor}
      </Text>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
  },
  valor: {
    marginTop: 20,
    fontSize: 12,
  },
});
