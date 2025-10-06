import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FormFieldProps {
  label: string;
  errorMessage?: string | null;
  children: ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ label, errorMessage, children }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    {children}
    {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  error: { color: 'red', marginTop: 4 },
});
