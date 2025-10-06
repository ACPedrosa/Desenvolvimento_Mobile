import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { FormField } from './FormField';

interface SwitchFieldProps {
  label: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
}

export const SwitchField: React.FC<SwitchFieldProps> = ({ label, value, onValueChange }) => (
  <FormField label={label}>
    <View style={styles.container}>
      <Switch value={value} onValueChange={onValueChange} />
      <Text style={{ marginLeft: 10 }}>{value ? 'Sim' : 'Não'}</Text>
    </View>
  </FormField>
);

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    },
});
