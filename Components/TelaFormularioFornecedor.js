import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FornecedorContext } from '../Context/FornecedorContext';

const TelaFormularioFornecedor = ({ route, navigation }) => {
  const { adicionarFornecedor, atualizarFornecedor } = useContext(FornecedorContext);
  const [id, setId] = useState(null);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categoria, setCategoria] = useState('');
  const [urlImagem, setUrlImagem] = useState('');

  useEffect(() => {
    if (route.params?.fornecedor) {
      const { id, nome, endereco, contato, categoria, imagem } = route.params.fornecedor;
      setId(id);
      setNome(nome);
      setEndereco(endereco);
      setContato(contato);
      setCategoria(categoria);
      setUrlImagem(imagem);
    }
  }, [route.params?.fornecedor]);

  const salvarFornecedor = () => {
    const fornecedorData = {
      id: id ? id : Date.now().toString(),
      nome,
      endereco,
      contato,
      categoria,
      imagem: urlImagem,
    };

    if (id) {
      atualizarFornecedor(fornecedorData);
    } else {
      adicionarFornecedor(fornecedorData);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <Text>Endereço:</Text>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />
      <Text>Contato:</Text>
      <TextInput style={styles.input} value={contato} onChangeText={setContato} />
      <Text>Categoria:</Text>
      <TextInput style={styles.input} value={categoria} onChangeText={setCategoria} />
      <Text>URL da Imagem:</Text>
      <TextInput style={styles.input} value={urlImagem} onChangeText={setUrlImagem} />
      {urlImagem ? <Image source={{ uri: urlImagem }} style={styles.supplierImage} /> : null}
      <TouchableOpacity style={styles.button} onPress={salvarFornecedor}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  supplierImage: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default TelaFormularioFornecedor;
