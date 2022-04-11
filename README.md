# Aplicação para Montagem de Sanduíches
# Lets Code - WebFullStack Módulo 7: React II

## Proposta do Teste
Criar uma aplicação que consiste em uma agenda de contatos. O sistema deve ser desenvolvido a partir de uma API backEnd fornecida.

### Documentação de projeto e informações ao professor:

O projeto foi desenvolvido utilizando os conceitos abordados no módulo:
- Componentes funcionais;
- Hooks (useState, useEffect, useRef, useFetch);
- Requisição de APIs;
- react-router-dom;
- React v18

O projeto apresenta uma página inicial com as opções de cadsatro e login.
Na tela de cadastro, é possível cadastrar um novo usuário, inserindo no "banco de dados" da API fornecida. Não foram implementadas lógicas de validação de dados. Serão implementadas futuramente.
Na tela de login, somente é possível logar caso o usuário esteja cadastrado no "banco de dados" da API fornecida.
Se as informações de login forem válidas, o usuário é direcionado para uma tela com as opções 'contatos' e 'novo contato.
A opção 'contatos' leva para a tela de busca e exibição de contatos. Após clicar no botão 'buscar' com o campo input vazio, são apresentados todos os contatos do usuário.
A função de busca não foi implementada. Será implementada futuramente, bem como as funções de alterar, excluir e mais informações, que apresentam apenas os botões sem funcionalidade.
A opção 'novo contato' apresena a tela de cadastro de novo contato. Os dados serão cadastrados no "banco de dados" da API fornecida e exibidos na tela de 'contatos' mencionada anteriormente.
 
 #### Implementações futuras
 - Tela para detalhamento do usuário;
 - Tela para detalhamento de contato;
 - Atualização de dados de contato;
 - Exclusão de contato;
 - Filtrar contatos por número e telefone;