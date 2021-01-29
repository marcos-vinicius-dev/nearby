


#  Projeto de avaliação

Este é um projeto para o Athon Tech , ele consome dados de uma API REST que apresenta dados criminais para um agente da lei.


##  Arquitetura

O projeto é um SPA construído com [Nuxt.js](https://nuxtjs.org/).
Biblioteca de IU utilizada foi [Vuetify](https://vuetifyjs.com/en/).
Sistema de componentes utiliza a metodologia [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

###  Estrutura de Pastas

- src/
- assets `recursos dinâmicos (processado pelo webpack)`
- boot `arquivos de inicialização`
- components/ `componentes do aplicativo`
- api `componentes responsaveis pela comunicação com a api`
- atoms `Atomic Design`
- molecules `Atomic Design`
- organisms `Atomic Design`
- css `definições de estilo (Scss)`
- helpers `funções auxiliares`
- layouts `elementos que envolvem o conteúdo da página`
- mixins `funcionalidade reutilizável`
- pages `paginas da aplicação`
- router `Rotas da aplicação - Vue Router`


##  Configurações do Projeto

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```



##  Guia de estilo

**Javascript** e **Vue.js**: são vinculado por [eslint](https://eslint.org/docs/user-guide/getting-started) com as regras de [estilo padrão de JavaScript](https://standardjs.com/) e [estilo padrão de Vue.js](https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention).

Utilizado **pré processador** de template **[Pugjs](https://github.com/pugjs/pug)** e **Scss** para o estilo

Os **commits** do **Git** seguem as [mensagens de commit semântico](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) .


###  Plugins utilizados e recursos

[VeeValidate](https://vee-validate.logaretm.com/v3) Estrutura de validação de formulário baseada em modelo para Vue.js


##  Objetivos

- [x] Login
- [x] Cadastro
- [x] Visualização de perfil - Editar perfil
- [x] Logout
- [x] Lista de locais próximos
- [x] Mapa com lugares próximos
- [x] Salvar locais em favoritos
- [x] Avaliar locais (rating e comentário) Obs: O Google maps não disponibiliza uma api para esta ação.
- [x] Tratamento de cenários de erros (login incorreto, e-mail e local já existentes, campos obrigatórios)
- [x] O app web deve ser implementado preferencialmente em Vue.js
- [x] Integração Google maps
- [x] Integração REQ|RES
- [x] O deployment da aplicação deve ser realizado no Heroku
- [x] O código da aplicação deve ser disponibilizado em um repositório do Github