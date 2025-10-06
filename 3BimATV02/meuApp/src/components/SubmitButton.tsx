import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SubmitButtonProps {
  title: string;
  onPress: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#26667F',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  text: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '600' ,
    },
});
