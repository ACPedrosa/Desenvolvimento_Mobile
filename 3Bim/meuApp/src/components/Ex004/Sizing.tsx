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
        <Image
          source={{ uri: 'https://imgs.search.brave.com/YeVbeIGdS_VezxhB4v_tvyrJLNoyKZ6hXROobnLUw8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ici5t/YXN0ZXJhcG9sbG9u/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8xMC9BLWNh/bWEtZGUtVmFuLUdv/Z2gtZW0tQXJsZXMt/JUUyJTgwJTkzLVZh/bi1Hb2doLS0xMDI0/eDc5NC5qcGc' }}
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