# Trabalho de Programação para Internet

Desenvolver um sistema que funciona de modo similar a um grupo do facebook. Em outras palavras, o sistema permite que usuários se cadastrem e possam criar novos posts, assim como inserir comentários em posts existentes. O sistema também deve permitir que os usuários deem uma curtida em um post.

## Histórias de usuário (funcionalidades):

  - Como usuário não cadastrado eu posso:
      - Visualizar listagem de posts
      - Criar conta (cadastrar-se)
      - Fazer login

  - Como usuário cadastrado e logado eu posso:
      - Visualizar listagem de posts
      - Inserir novo post
      - Editar um post criado pelo próprio usuário
      - Remover um post criado pelo próprio usuário
      - Comentar em um post qualquer
      - Remover um comentário feito pelo próprio usuário
      - Curtir um post qualquer
      - Fazer logout

## Modelo de dados:

  - Um usuário deve conter as seguintes informações:
    - username
    - nome (que vai aparecer nos posts e comentários)
    - data de nascimento
    - senha

  - Um post deve conter as seguintes informações:
    - título do post
    - conteúdo (mensagem) do post
    - referência ao usuário criador do post
    - data de criação do post
    - quantidade de curtidas recebidas
    - referencia ao criador do COMENTARIO 

  - Um comentário de post deve conter as seguintes informações:
    - conteúdo (texto) do comentário
    - referência ao post ao qual se refere o comentário //IDDO POST
    - referência ao usuário que fez o comentário
    - data do comentário

## Quanto à arquitetura e tecnologias utilizadas:

  - O trabalho pode ser feito de duas formas: *server-side com MVC* ou *API+SPA*. Qualquer stack (linguagem + frameworks + banco) pode ser utilizada. Lembrando que será necessário explicar/apresentar o trabalho ao professor, sendo tal apresentação gravada.

    - No caso de *server-side com MVC*, sugere-se o uso da stack NodeJS + Express + EJS, utilizado em aula. Algumas outras sugestões de stacks seriam:
      - Python + Flask + templates Jinja
      - Python + Django
      - Java + Spring MVC + JSP
      - Ruby on Rails
      - PHP + Laravel
      - etc.

    - No caso de *API+SPA*, será necessário desenvolver a API RESTful no backend e o SPA (Single Page Application) no frontend. 
      - Para a API, sugere-se o uso do NodeJS + Express. Alternativas para implementação da API são: Python + Flask; Java + Spring Boot; Go + Gin.
      - Para o SPA (frontend), sugere-se o uso do React. Alternativas seriam: Vue.js e Angular.

  - Quanto ao banco de dados, sugere-se o uso do MongoDB, pela facilidade de implementação. No entanto, é válido o uso de um banco de dados SQL, como MySQL, PostreSQL, etc. Se for utilizar um banco SQL, opte por utilizar um framework ORM (mapeamento objeto-relacional) para facilitar a implementação (ex: para Node existe o Sequelize, para Python existe o SQLAlchemy, para Java existe o Hibernate, etc).

## Detalhes de interface e estilização:

- A interface deve ser similar a um feed de um grupo de facebook. Lembrando que não é necessário implementar criação de tópicos/grupos. Imagine como se o sistema fosse um único grupo do facebook.

- Para a estilização, sugere-se usar um framework de CSS responsivo, como o Bootstrap, como base, mas pode-se personalizar o CSS conforme o gosto.

## Avaliação:

- A nota da entrega (NE) será composta dos seguintes componentes:
  - Corretude (CR): o software funciona conforme as especificações aqui apresentadas (Peso 4)
  - Completude (CP): todas as funcionalidades foram implementadas (Peso 4)
  - Qualidade e organização do código (QC): o projeto/código está bem estruturado (Peso 2)

  - Portanto, a nota da entrega (NE) é calculada da seguinte forma: NE = CR * 0.4 + CP * 0.4 + QC * 0.2

- A nota da entrega (NE) será multiplicada por um coeficiente de apresentação (CoA), variando de 0% a 100%, consistindo no nível de entendimento demonstrado pelo aluno, durante a apresentação, do trabalho desenvolvido pelo próprio. A apresentação será gravada para fins de registro.

- Portanto, a nota final do trabalho (NT) é calculada da seguinte forma: NT = NE * CoA

## Requisitos EXTRAS (opcional - nota extra)

- O sistema de curtidas apresentado nas histórias de usuário e no modelo de dados não permite restringir a quantidade de curtidas que um usuário pode dar em um mesmo post. Além disso, a curtida dada por um usuário não pode ser desfeita, pois a especificação atual não armazena/representa qual usuário deu determinada curtida. 
  
- Portanto, modifique ou desenvolva o projeto desde o início com a seguinte história adicional:
  - Como usuário logado, posso descurtir um post anteriormente curtido pelo mesmo usuário

- Nova restrição (regra de negócio):
  - Como usuário logado, não posso curtir um post mais de uma vez

- Deve-se alterar o modelo de dados para permitir gravar quais usuários deram curtidas. Para isso, há duas altenativas principais:
  
  1. De modo similar ao que é feito em bancos de dados relacionais: deve-se criar um novo modelo de dados que representa uma Curtida. Uma curtida referencia o post curtido e o usuário que o curtiu, de modo similar a uma tabela associativa. Assim, ao se curtir um post, cria-se um novo objeto Curtida que contém o id do post e o id do usuário.

  2. Usando um banco de dados JSON, como o MongoDB, é possível uma forma mais simples: tornando o atributo 'curtidas' no modelo de Post num atributo multivalorado. Ou seja, em vez de armazenar a quantidade de curtidas, armazena-se a lista de ids de usuário que curtiram. Quando um usuário curte, insere-se seu id nessa lista; e ao descurtir, remove-se seu id dessa lista.
