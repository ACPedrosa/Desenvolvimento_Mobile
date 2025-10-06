import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { FormField } from './FormField';

interface SliderFieldProps {
  label: string;
  value: number;
  onValueChange: (value: number) => void;
  min: number;
  max: number;
  errorMessage?: string | null;
}

export const SliderField: React.FC<SliderFieldProps> = ({ label, value, onValueChange, min, max, errorMessage }) => (
  <FormField label={label} errorMessage={errorMessage}>
    <Slider
      style={{ width: '100%', height: 40 }}
      minimumValue={min}
      maximumValue={max}
      step={100}
      value={value}
      onValueChange={onValueChange}
      minimumTrackTintColor="#5E936C"
      maximumTrackTintColor="#DDF4E7"
      thumbTintColor="#67C090"
    />
    <Text style={styles.value}>Valor atual: R$ {value.toFixed(2)}</Text>
  </FormField>
);

const styles = StyleSheet.create({
  value: { 
    textAlign: 'center', 
    marginTop: 6, 
    fontSize: 15, 
    color: '#333', 
    },
});
