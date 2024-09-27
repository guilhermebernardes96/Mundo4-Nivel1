import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './Components/TelaInicial';
import TelaFormularioFornecedor from './Components/TelaFormularioFornecedor';
import TelaListaFornecedores from './Components/TelaListaFornecedores';
import { FornecedorProvider } from './Contexto/FornecedorContext';

const Stack = createStackNavigator();

function App() {
  return (
    <FornecedorProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={TelaInicial} options={{ title: 'Início' }} />
          <Stack.Screen name="AdicionarFornecedor" component={TelaFormularioFornecedor} options={{ title: 'Adicionar Fornecedor' }} />
          <Stack.Screen name="EditarFornecedor" component={TelaFormularioFornecedor} options={{ title: 'Editar Fornecedor' }} />
          <Stack.Screen name="ListaFornecedores" component={TelaListaFornecedores} options={{ title: 'Fornecedores Cadastrados' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FornecedorProvider>
  );
}

export default App;
