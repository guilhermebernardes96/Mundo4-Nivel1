import React, { createContext, useState } from 'react';

export const FornecedorContext = createContext();

export const FornecedorProvider = ({ children }) => {
  const [fornecedores, setFornecedores] = useState([]);

  const adicionarFornecedor = (novoFornecedor) => {
    setFornecedores([...fornecedores, novoFornecedor]);
  };

  const atualizarFornecedor = (fornecedorAtualizado) => {
    setFornecedores((fornecedoresAtuais) =>
      fornecedoresAtuais.map((fornecedor) =>
        fornecedor.id === fornecedorAtualizado.id ? fornecedorAtualizado : fornecedor
      )
    );
  };

  const removerFornecedor = (id) => {
    setFornecedores((fornecedoresAtuais) =>
      fornecedoresAtuais.filter((fornecedor) => fornecedor.id !== id)
    );
  };

  return (
    <FornecedorContext.Provider
      value={{
        fornecedores,
        adicionarFornecedor,
        atualizarFornecedor,
        removerFornecedor,
      }}
    >
      {children}
    </FornecedorContext.Provider>
  );
};
