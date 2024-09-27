# Meeting
O **Meeting** é um aplicativo de cadastro de fornecedores desenvolvido em React Native utilizando Expo. Ele permite aos usuários cadastrar, visualizar, editar e excluir fornecedores, com a possibilidade de adicionar imagens via URL. A interface é simples e intuitiva.

# Documentacao
~~ FALTA LINK ~~

## Funcionalidades
- Cadastro de fornecedores com nome, endereço, contato e categoria de produtos.
- Upload de imagens via URL para os perfis dos fornecedores.
- Visualização e pesquisa de fornecedores cadastrados.
- Edição e exclusão de fornecedores.

## Pré-requisitos
- Node.js
- Expo CLI
- Git

## Instalação
1. Clone o repositório:
  ``` bash
  git clone https://github.com/guilhermebernardes96/Mundo4-Nivel1.git
  ```

2. Navegue até o diretório do projeto:
  ```bash
  cd Mundo4-Nivel1
  ```
   
3. Instale as dependências:
  ```bash
  npm install
  ```

4. Instale as bibliotecas de navegação e gestos:
  ```bash
  npx expo install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-screens react-native-safe-area-context
  ```
5. Execute o aplicativo:
  ```bash
  npx expo start
  ```
6. Siga as instrucões do terminal para abrir o app conforme seu gosto: na web, no emulador Android ou no emulador iOS.

## Como usar
- Após iniciar o Expo siga as instruções do terminal para abrir no emulador ou na web
- Na tela inicial, você verá duas opções: "Adicionar Fornecedor" e "Ver Fornecedores Cadastrados".
- Para adicionar um fornecedor, preencha os dados necessários e forneça uma URL de imagem.
- Após adicionar um fornecedor, ele aparecerá na lista de fornecedores cadastrados.
