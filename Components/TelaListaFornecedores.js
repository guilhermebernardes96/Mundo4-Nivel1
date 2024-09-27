import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FornecedorContext } from '../Contexto/FornecedorContext';

const TelaListaFornecedores = ({ navigation }) => {
  const { fornecedores, removerFornecedor } = useContext(FornecedorContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={fornecedores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.fornecedorItem}>
            <Image source={{ uri: item.imagem }} style={styles.fornecedorImagem} />
            <View style={styles.fornecedorDetalhes}>
              <Text style={styles.fornecedorNome}>{item.nome}</Text>
              <Text>{item.categoria}</Text>
              <Text>{item.endereco}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EditarFornecedor', { fornecedor: item })}>
              <Text style={styles.actionButtonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removerFornecedor(item.id)}>
              <Text style={[styles.actionButtonText, styles.deleteButtonText]}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  fornecedorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  fornecedorImagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  fornecedorDetalhes: {
    flex: 1,
  },
  fornecedorNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButtonText: {
    color: 'blue',
  },
  deleteButtonText: {
    color: 'red',
  },
});

export default TelaListaFornecedores;
