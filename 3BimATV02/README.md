# Aplicativo Abrir Conta Bancária

Este projeto foi desenvolvido utilizando **React Native (Expo)** para praticar a criação de formulários, validação de dados em tempo real e o uso de componentes essenciais de interface.

---

## Requisitos Funcionais Implementados

- **Campos de Formulário**: Nome, Idade, Sexo (simulação de Picker via `TouchableOpacity`), Limite da Conta (simulação de Slider via `TextInput` e validação manual), e Estudante (`Switch`).
- **Validação de Dados**: Todos os campos obrigatórios são validados. A idade mínima é de 18 anos, e o limite da conta é validado entre R$ 500,00 e R$ 10.000,00.
- **Botão "Abrir Conta"**: Desabilitado enquanto houver erros de validação (Ponto Extra) e exibe o resumo dos dados na tela (renderização) após o sucesso.
- **UX**: O valor do limite sugerido é exibido acima do campo.

---

## Pré-requisitos

Certifique-se de que você tem instalado em sua máquina:

- Node.js  
- npm ou yarn  
- Expo CLI

---

## Como Executar o Projeto

### 1. Instalação de Dependências

Neste projeto, não há dependências externas além das padrão do Expo.

### 2. Execução

Para iniciar o servidor de desenvolvimento do Expo, execute:

```bash
npx expo start
