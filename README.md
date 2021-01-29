


#  Projeto de avaliação

Este é um projeto Frontend para Zro Bank, ele conta com a [Api Req | Res](https://reqres.in/) para implementação do Login, Cadastro e Perfil do usuário. Apresenta também uma pesquisa de locais próximos ao usuário, retornando esses locais em formato de mapa e lista [Google Places Api](https://cloud.google.com/maps-platform/places/).


##  Arquitetura

O projeto é um SPA construído com [Nuxt.js](https://nuxtjs.org/).

Biblioteca de IU utilizada foi [Vuetify](https://vuetifyjs.com/en/).

Sistema de componentes utiliza a metodologia [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

###  Estrutura de Pastas

- assets `ativos não compilados (processado pelo webpack)`
	- css `definições de estilo (Scss)`
- components/ `componentes do aplicativo`
	- api `componentes responsaveis pela comunicação com a api`
	- atoms `Atomic Design`
	- molecules `Atomic Design`
	- organisms `Atomic Design`
- helpers `funções auxiliares`
- layouts `elementos que envolvem o conteúdo da página`
- middleware `funções personalizadas que podem ser executadas antes de renderizar uma página ou um grupo de páginas (layouts).`
- mixins `funcionalidade reutilizável`
- pages `paginas da aplicação`
- plugins `plug-ins JavaScript que você deseja executar antes de instanciar o aplicativo raiz Vue.js`
- static `ativos estáticos`
- store `vuex Store`
- .env `variáveis globais`
- nuxt.config.js `configurações do nuxt`


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

[js-cookie](https://github.com/js-cookie/js-cookie) Uma API para lidar com cookies

[cookie-parser](https://github.com/expressjs/cookie-parser#readme)

[vuex-persist](https://github.com/championswimmer/vuex-persist#readme) Permite que você salve o estado do seu aplicativo em um armazenamento persistente como Cookies ou localStorage

[Vue Toasted](https://github.com/shakee93/vue-toasted) Notificações


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