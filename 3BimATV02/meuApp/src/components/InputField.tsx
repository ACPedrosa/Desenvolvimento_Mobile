import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { FormField } from './FormField';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  errorMessage?: string | null;
  keyboardType?: 'default' | 'numeric' | 'email-address';
}

export const InputField: React.FC<InputFieldProps> = ({
  label, value, onChangeText, placeholder, errorMessage, keyboardType
}) => (
  <FormField label={label} errorMessage={errorMessage}>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType || 'default'}
    />
  </FormField>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#5E936C',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
});
