# Atividades Mobile - React-Native
- [x] TASK #i01    ATIVIDADE: INTERNACIONALIZAÇÃO E EVENTOS
- [x] TASK #i02    ATIVIDADE: LAYOUT DE TELAS
- [x] TASK #i03    ATIVIDADE: INTERAÇÃO ENTRE ACTIVITIES
- [x] TASK #i04    ATIVIDADE: APP CONSUMINDO API

### Para rodar o app pela cli:
* Seguir a [documentação](https://facebook.github.io/react-native/docs/getting-started) do framework e realizar set-up do ambiente de desenvolvimento. 
*(Realizar as instruções do **React-Native-CLI Quickstart** :sweat_smile:)*
* Clonar o repositório no seu workspace
  > https://github.com/fffeiip/Atividades_Mobile.git
* Inicializar o emulador
*  Abrir o terminal da linha de comando
  * Navegar até o workspace e abrir a pasta do projeto clonado
  * Instalar as dependências do projeto, utilizando o comando **yarn install** (caso não possua, instale o [yarn](https://yarnpkg.com/lang/en/docs/install))
  * Utilizar o comando **yarn react-native run-android** ou **yarn react-native run-ios**, a depender do s.o do emulador.
  > Um erro comum de acontecer é o servidor de node não ser inicializado automaticamente com esses comandos, para este caso, se faz necessário abrir outro terminal e utilizar o comando **yarn start** na pasta do projeto e esperar o servidor inicializar, para só então realizar o ultimo passo citado.
  
## Intruções de Uso

#### Layout de Telas
Neste app foi utilizado um json-server, logo para que a aplicação funcione corretamente alguns passos adicionas se fazem necessários:
* Na pasta raiz do projeto, rodar o comando **yarn json-server server.json -d 1000 -w**
###### Para emulador android: 
* Alterar a configuração padrão de conexão tcp do adb com o comando **adb reverse tcp:3000 tcp:3000**
