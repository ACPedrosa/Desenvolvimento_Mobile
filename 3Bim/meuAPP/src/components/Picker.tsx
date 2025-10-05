import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

interface Pizza{
  key: number;
  name: string;
  value: string;
}

interface State{
  pizza: number;
  pizzas: Pizza[];
  
}


export default class App extends Component <{}, State> {
  constructor(props: {}){
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, name: 'Calabresa', value: '80.90'},
        {key: 2, name: 'Portuguesa', value: '70.90'},
        {key: 3, name: 'Queijo', value: '40.90'}
      ]

    }
  }

  render(){
    let pizzaItem = this.state.pizzas.map((va, key) => {
      return <Picker.Item key={key} value={key} label={va.name}/>
    });

    return (
      <View style={styles.container}>
          <Text style={styles.logo}>Menu Pizza</Text>

          <Picker 
          selectedValue={this.state.pizza}
          onValueChange={(itemValue) => this.setState({pizza: itemValue})}
          >

          {pizzaItem}
          
          </Picker>

          <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].name}</Text>
          <Text style={styles.pizzas}>Valor: {this.state.pizzas[this.state.pizza].value}</Text>
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
  pizzas: {
    marginTop: 20,
    fontSize: 34,
  },
});
