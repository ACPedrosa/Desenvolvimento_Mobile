import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { InputField } from './src/components/InputField';
import { PickerField } from './src/components/PickerField';
import { SliderField } from './src/components/SliderField';
import { SwitchField } from './src/components/SwitchField';
import { SubmitButton } from './src/components/SubmitButton';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [limite, setLimite] = useState(2500);
  const [isEstudante, setIsEstudante] = useState(false);

  const [errorNome, setErrorNome] = useState<string | null>(null);
  const [errorIdade, setErrorIdade] = useState<string | null>(null);
  const [errorSexo, setErrorSexo] = useState<string | null>(null);
  const [errorLimite, setErrorLimite] = useState<string | null>(null);

  const [contaCriada, setContaCriada] = useState(false);
  const [dadosConta, setDadosConta] = useState({
    nome: '',
    idade: '',
    sexo: '',
    limite: 0,
    isEstudante: false,
  });

  const MIN_LIMIT = 500;
  const MAX_LIMIT = 10000;

  const handleSubmit = () => {
    let hasError = false;

    // Validação dos campos 
    if (!nome.trim()) { setErrorNome('Informe o nome'); hasError = true; } else setErrorNome(null);
    const idadeNum = parseInt(idade);
    if (!idade || isNaN(idadeNum) || idadeNum < 18) { setErrorIdade('Idade mínima é 18 anos'); hasError = true; } else setErrorIdade(null);
    if (!sexo) { setErrorSexo('Selecione o sexo'); hasError = true; } else setErrorSexo(null);
    if (limite < MIN_LIMIT || limite > MAX_LIMIT) { setErrorLimite(`O limite deve estar entre R$${MIN_LIMIT} e R$${MAX_LIMIT}`); hasError = true; } else setErrorLimite(null);

    if (hasError) return;

    // Salva os ados e ativa a exibição dos dados
    setDadosConta({ nome, idade, sexo, limite, isEstudante });
    setContaCriada(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Cadastro - Banco AARE</Text>

        <InputField label="Nome" value={nome} onChangeText={setNome} placeholder="Digite seu nome" errorMessage={errorNome} />
        <InputField label="Idade" value={idade} onChangeText={setIdade} placeholder="Digite sua idade" keyboardType="numeric" errorMessage={errorIdade} />

        <PickerField
          label="Sexo"
          value={sexo}
          onValueChange={setSexo}
          options={[
            { label: 'Selecione...', value: '' },
            { label: 'Masculino', value: 'Masculino' },
            { label: 'Feminino', value: 'Feminino' },
            { label: 'Outro', value: 'Outro' },
          ]}
          errorMessage={errorSexo}
        />

        <SliderField
          label={`Limite da Conta (R$ ${MIN_LIMIT} a R$ ${MAX_LIMIT})`}
          value={limite}
          onValueChange={setLimite}
          min={MIN_LIMIT}
          max={MAX_LIMIT}
          errorMessage={errorLimite}
        />

        <SwitchField label="É estudante?" value={isEstudante} onValueChange={setIsEstudante} />

        <SubmitButton title="Abrir Conta" onPress={handleSubmit} />

        {contaCriada && (
          <View style={styles.resumo}>
            <Text style={styles.resumoTitle}>Conta Criada:</Text>
            <Text style={styles.resumoText}>Nome: {dadosConta.nome}</Text>
            <Text style={styles.resumoText}>Idade: {dadosConta.idade}</Text>
            <Text style={styles.resumoText}>Sexo: {dadosConta.sexo}</Text>
            <Text style={styles.resumoText}>Limite: R$ {dadosConta.limite.toFixed(2)}</Text>
            <Text style={styles.resumoText}>Estudante: {dadosConta.isEstudante ? 'Sim' : 'Não'}</Text>
          </View>
        )}
      </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 40,
    backgroundColor: '#F3F2EC',
    alignItems: 'center',
  },
  title: { 
    fontSize: 26, 
    fontWeight: '700', 
    color: '#5E936C', 
    textAlign: 'center', 
    marginBottom: 24 
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: '90%',
    alignSelf: 'center',
  },
  resumo: {
    marginTop: 30,
    padding: 20,
    borderWidth: 1,
    borderColor: '#5E936C',
    borderRadius: 10,
    backgroundColor: '#e9f5ff',
  },
  resumoTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#5E936C',
  },
  resumoText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#5E936C',
    fontWeight: '600',
    letterSpacing: 0.5,
},
});
