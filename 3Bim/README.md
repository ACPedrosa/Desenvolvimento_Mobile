# Atividades de Fundamentos em React Native

Este projeto contém  atividades desenvolvidas em **React Native** com **TypeScript** para a aula de Dispositivos Móveis.

---

## Tecnologias Utilizadas

* **React Native**: Framework para a construção de aplicativos móveis.
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática.

---

## Estrutura do Projeto

O projeto foi organizado da seguinte forma: 

meuApp/
├── src/
│   ├── components/
│   │   ├── Ex001/
│   │   │   └── Greeting.tsx      // Componente que usa props.
│   │   ├── Ex002/
│   │   │   └── Counter.tsx       // Componente que gerencia o estado.
│   │   ├── Ex003/
│   │   │   └── AlignmentPractice.tsx // Componente que demonstra alinhamentos.
│   │   ├── Ex004/
│   │   │   └── Sizing.tsx        // Componente que compara tamanhos fixos vs. dinâmicos.
│   ├── App.tsx                   // Tela principal que renderiza todos os 

O App.tsx, é o arquivo principal que chama os outros componentes da atividade.

## Descrição das Atividades

### Exercício 01: Saudação com Props

* **Objetivo**: Demonstrar o uso de **`props`** para passar dados de um componente pai para um componente filho.
* **Componente**: `Greeting.tsx`

### Exercício 02: Contador (State)

* **Objetivo**: Explorar o conceito de **`state`** para gerenciar dados que mudam com o tempo.
* **Componente**: `Counter.tsx`

### Exercício 03: Alinhamentos na Prática

* **Objetivo**: Praticar as propriedades **`justifyContent`** e **`alignItems`** do Flexbox.
* **Componente**: `AlignmentPractice.tsx`

### Exercício 04: Tamanhos Fixos vs Dinâmicos

* **Objetivo**: Contrastar o uso de tamanhos fixos com layouts dinâmicos e responsivos usando Flexbox e `Dimensions`.
* **Componente**: `Sizing.tsx`
---

## Como Executar o Projeto

1.  Clone o repositório.
2.  Instale as dependências: `npm install` ou `yarn install`.
3.  Execute o projeto:
    * Para iOS: `npx react-native run-ios`
    * Para Android: `npx react-native run-android`
4.  O aplicativo será iniciado, exibindo todos os exercícios em uma única tela rolável.