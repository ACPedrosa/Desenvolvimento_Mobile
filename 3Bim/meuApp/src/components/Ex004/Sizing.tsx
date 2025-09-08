import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, useWindowDimensions } from 'react-native';

const Sizing = () => {
  const { width, height } = useWindowDimensions();
  const screenWidth = Dimensions.get('screen').width; // Dimenssão da tela do dispositivo 

  // calculo de 80% do tamanho da tela
  const imageWidth = width * 0.8;
  const imageHeight = imageWidth * (300 / 500); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tamanhos Fixos vs Dinâmicos</Text>

      {/* Seção A: Tamanhos Fixos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Seção A - Tamanhos Fixos</Text>
        <Text style={styles.description}>
          Elementos com `width` e `height` fixos em pixels - sem adaptação
        </Text>
        <View style={styles.fixedContainer}>
          <View style={styles.fixedBox} />
          <View style={styles.fixedBox} />
          <View style={styles.fixedBox} />
        </View>
      </View>

      <View style={styles.divider} />

      {/* Seção B: Tamanhos Dinâmicos (Responsivos) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Seção B - Tamanhos Dinâmicos (Responsive)</Text>
        <Text style={styles.description}>
          Elementos que se adaptam usando Flexbox e `useWindowDimensions`.
        </Text>
        <View style={styles.responsiveContainer}>
          <View style={styles.dynamicBox} />
          <View style={styles.dynamicBox} />
          <View style={styles.dynamicBox} />
        </View>
        <Text style={styles.dynamicText}>
          Largura da tela: {width.toFixed(2)} px
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Imagem Responsiva</Text>
        <Text style={styles.description}>
          Tamanho calculado com base na largura da tela
        </Text>
        <Image
          source={{ uri: 'https://imgs.search.brave.com/cIZcFnszq6dnj1qi5UQCyt9v0b_dv-2x1-Woew0E2eo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/MTkyOTAtQ0JUNTE4/NjAwMjQ5NDBfMTAy/MDIyLU8ud2VicA' }}
          style={{
            width: imageWidth,
            height: imageHeight,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Text style={styles.imageSizeText}>
          Tamanho da Imagem: {imageWidth.toFixed(2)} x {imageHeight.toFixed(2)} px
        </Text>
      </View>
    </View>
  );
};

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
  section: {
    width: '100%',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    width: '100%',
    marginVertical: 20,
  },
  fixedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fixedBox: {
    width: 60,
    height: 60,
    backgroundColor: 'lightblue',
  },
  responsiveContainer: {
    flexDirection: 'row',
    flex: 1, 
  },
  dynamicBox: {
    flex: 1, // ocupa a mesma quantidade de espaço do flexbox
    height: 60,
    backgroundColor: 'coral',
    margin: 5,
  },
  dynamicText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
  },
  imageSizeText: {
    marginTop: 10,
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
});

export default Sizing;