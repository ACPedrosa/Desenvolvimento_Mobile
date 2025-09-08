import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface AlignmentState {
  justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
}

class AlignmentPractice extends Component<{}, AlignmentState> {
  state: AlignmentState = {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  };

  handleOption1 = () => {
    this.setState({
      justifyContent: 'center',
      alignItems: 'flex-start',
    });
  };

  handleOption2 = () => {
    this.setState({
      justifyContent: 'space-between',
      alignItems: 'center',
    });
  };

  handleOption3 = () => {
    this.setState({
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    });
  };

  render() {
    const { justifyContent, alignItems } = this.state;

    const dynamicStyle = {
      justifyContent,
      alignItems,
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Alinhamentos na Prática</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.roundButton} onPress={this.handleOption1}>
            <Text style={styles.buttonText}>Opção 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={this.handleOption2}>
            <Text style={styles.buttonText}>Opção 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={this.handleOption3}>
            <Text style={styles.buttonText}>Opção 3</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.alignmentBox, dynamicStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>

        <Text style={styles.currentAlignment}>
          `justifyContent`: **{justifyContent}**
          {'\n'}
          `alignItems`: **{alignItems}**
        </Text>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    gap: 10,
  },
  alignmentBox: {
    backgroundColor: '#e0e0e0',
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8, 
    flexDirection: 'row',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'dodgerblue',
    margin: 5,
  },
  currentAlignment: {
    marginTop: 15,
    fontSize: 14,
    textAlign: 'center',
  },

  roundButton: {
    flex: 1,
    backgroundColor: '#F08787',
    borderRadius: 8, 
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AlignmentPractice;