import React, { Component } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';

// Criando uma interface
interface GreetingProps {
  name: string;
  size?: number;
}

class Greeting extends Component<GreetingProps> {
  // valores padroa
  static defaultProps = {
    size: 18,
  };

  render() {
    const { name, size } = this.props;
    const textSize: TextStyle = size ? { fontSize: size } : {};

    return (
      <View style={styles.container}>
        <Text style={[styles.texto, textSize]}>
          Olá, {name}!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  texto: {
    fontWeight: 'bold',
  },
});

export default Greeting;