import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { FormField } from './FormField';
import { StyleSheet } from 'react-native';

interface PickerFieldProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: { label: string; value: string }[];
  errorMessage?: string | null;
}

export const PickerField: React.FC<PickerFieldProps> = ({ label, value, onValueChange, options, errorMessage }) => (
  <FormField label={label} errorMessage={errorMessage}>
    <Picker selectedValue={value} onValueChange={onValueChange} style={styles.picker}>
      {options.map(opt => <Picker.Item key={opt.value} label={opt.label} value={opt.value} />)}
    </Picker>
  </FormField>
);

const styles = StyleSheet.create({
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#5E936C',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
