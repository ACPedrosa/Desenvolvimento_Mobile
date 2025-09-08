import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

// ---- Iportação -------
import Greeting from './src/components/Ex001/Greeting'
import Counter from './src/components/Ex002/Counter'
import AlingmentPractice from './src/components/Ex003/AlignmentPractice'
import Sizing from './src/components/Ex004/Sizing'

const App = () => {
  const [name, setName] = useState<string>('Nome');
  const [size, setSize] = useState<string>('Tamanho');
  
  return (
    <SafeAreaView style={styles.area}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.letraPrincipal}>Atividades React Native - 3° Bimestre</Text>

        <View style={styles.containerExercicio}>
          <Text style={styles.letraExerciico}>Exercício 01: Saudação com Props</Text>
        
          <TextInput style={styles.input}  placeholder="Digite seu nome: " value={name} onChangeText={setName}/>
          <TextInput style={styles.input} placeholder="Digite o tamanho da fonte (ex: 24)" keyboardType="numeric" value={size} onChangeText={setSize}/>

          <Greeting name={name} size={Number(size)} />

        </View>
        
        <View style={styles.divider} />

        <View style={styles.containerExercicio}>
          <Text style={styles.letraExerciico}>Exercício 02: Contador (state)</Text>
          <Counter />
        </View>

        <View style={styles.divider} />

        <View style={styles.containerExercicio}>
          <Text style={styles.letraExerciico}>Exercício 03: Alinhamentos na prática </Text>
          <AlingmentPractice />
        </View>

        <View style={styles.divider} />

        <View style={styles.containerExercicio}>
          <Text style={styles.letraExerciico}>Exercício 04: Tamanhos Fixos vs Dinâmicos </Text>
          <Sizing />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// ----- Css -----
const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#FAF7F3',
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  letraPrincipal: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  containerExercicio: {
    backgroundColor: '#FFD6BA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  letraExerciico: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
});

export default App;