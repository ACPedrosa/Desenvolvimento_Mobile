import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #f4f7ff;
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;
  background-color: #3b3dbf; 
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px 12px;
`;

export const BackButtonText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin-left: 10px;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #f4f7ff;
  justify-content: center;
  align-items: center;
`;

export const AreaInput = styled.View`
  width: 90%;
  margin-bottom: 15px;
  flex-direction: column;
`;


export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #3b3dbf;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 4px; /* pequeno espaço entre input e erro */
`;