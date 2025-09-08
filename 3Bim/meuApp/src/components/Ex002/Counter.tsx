import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Contador</Text>
        <View style={styles.counterContainer}>
          <Text style={styles.countText}>{this.state.count}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.roundButton} onPress={this.handleDecrement}>
              <Text style={styles.buttonText}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton} onPress={this.handleIncrement}>
              <Text style={styles.buttonText}>+1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  countText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    minWidth: 50,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },

  roundButton: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    backgroundColor: '#F08787', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Counter;