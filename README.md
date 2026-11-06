# To-do List com React e Recoil

## Sobre o projeto

Este projeto foi desenvolvido como exercício do módulo 20 do curso de Front-end da EBAC. O objetivo foi praticar o gerenciamento de estado global em aplicações React utilizando a biblioteca **Recoil**.

A aplicação consiste em uma lista de tarefas que permite adicionar, concluir, remover e filtrar atividades.

## Funcionalidades

- Adicionar novas tarefas.
- Marcar tarefas como concluídas ou pendentes.
- Remover tarefas da lista.
- Filtrar tarefas por todas, pendentes ou concluídas.
- Visualizar a quantidade de tarefas em cada categoria.

## Tecnologias utilizadas

- React
- JavaScript
- Recoil
- Vite
- CSS
- Lucide React

## Gerenciamento de estado

O Recoil foi utilizado para centralizar o gerenciamento dos estados da aplicação:

- **Atoms:** armazenam a lista de tarefas e o filtro selecionado.
- **Selectors:** filtram as tarefas de acordo com a opção selecionada.
- **RecoilRoot:** disponibiliza o estado global para os componentes da aplicação.

## Como executar o projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/lucasmachi/todo-react-recoil.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd todo-react-recoil
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie a aplicação:

   ```bash
   npm run dev
   ```

5. Acesse o endereço indicado no terminal, geralmente `http://localhost:5173`.

---

Desenvolvido como parte dos estudos de Front-end na EBAC.
