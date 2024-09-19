import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Adicionar Fornecedor"
        onPress={() => navigation.navigate('AdicionarFornecedor')}
      />
      <Button
        title="Ver Fornecedores Cadastrados"
        onPress={() => navigation.navigate('ListaFornecedores')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default TelaInicial;
