# 📌 Gerenciador de Tarefas em React

Este projeto é um **Gerenciador de Tarefas** desenvolvido em **React**, com o objetivo de praticar conceitos fundamentais como componentização, gerenciamento de estado global com Context API, hooks e manipulação imutável de listas.  
O usuário pode adicionar tarefas, marcá-las como concluídas e filtrá-las por status.

---

## 🧰 Funcionalidades

- **Adicionar novas tarefas** através de um campo de entrada e botão.
- **Exibição de lista de tarefas** na tela.
- **Marcar tarefas como concluídas** usando checkbox.
- **Filtrar tarefas** por:
  - Todas
  - Concluídas
  - Pendentes
- **Gerenciamento de estado global** usando Context API + useReducer.

---

## 🗂️ Estrutura do Projeto

O projeto foi organizado com pastas e componentes separados, seguindo boas práticas de desenvolvimento com React:

src/ │ App.js │ index.js │ index.css │ ├── context/ │      TarefasContext.js │ └── components/ FormAdicionar.js ListaDeTarefas.js Tarefa.js Filtro.js

---

## 🛠️ Tecnologias Utilizadas

- **React.js**
- **JavaScript (ES6+)**
- **Context API**
- **Hooks** (`useState`, `useReducer`, `useContext`)
- **CSS puro**

---

## ▶️ Como Executar o Projeto

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

2. Entre na pasta do projeto:



cd seu-repositorio

3. Instale as dependências:



npm install

4. Execute o projeto:



npm start

5. Acesse no navegador:



http://localhost:3000


---

📘 Conceitos Aplicados

Estruturação de componentes em React

Estados locais e globais

Atualização de estado de forma imutável

Uso de useReducer para controle de ações

Context API para compartilhamento de estado

Manipulação de eventos (onClick, onChange)

Separação de responsabilidades entre componentes



---

🎯 Objetivo Acadêmico

Este projeto foi desenvolvido como parte de uma atividade acadêmica na disciplina de Desenvolvimento Web/React, promovendo:

Organização e modularização de código

Entendimento prático dos hooks

Gerenciamento de estado global

Boas práticas no desenvolvimento em React



---

👤 Autor

Alexandre Augusto Moura
Projeto desenvolvido para fins educacionais.


---

📄 Licença

Este projeto é de uso acadêmico e livre para estudo e aprimoramento.

---
