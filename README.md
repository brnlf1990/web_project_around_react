# Tripleten Around The U.S.

Projeto criado para pessoas que viajam dentro dos Estados Unidos da America, compartilharem os melhores lugares a serem explorados no país. Aqui você pode postar uma foto, colocar o nome do local e outras pessoas podem curtir seu post. 


O site em si possui o mesmo HTML e mesmo CSS, mas foi utilizado React para dar interação. Possui layout responsivo para Smartphones.
Esse projeto foi refatorado em React, foi feito em uma abordagem mais Declarativa, onde pegamos os estados e mudamos de acordo com a interação. Para isso foram utilizados Hooks como useState, useEffect, useRef, useContext, createContext.
Com isso e deixando o DOM no lugar mais alto, podemos acessar enviando como {prop} ou diretamente assinando com useContext. Tive problemas no entendimento de distribuição da {props} para outros componentes, mas consegui entender o funcionamento quando precisei fazer com que os botões efetuem suas funções. Onde quando passava as {props} nos componentes pensei que estava passando argumentos e nao colocava {}(chaves) para entende-los como props. Todas as Classes de JS fora refatorados para Hooks, onde a sintaxe ficou melhor e mais legivel.


## Foi criado com Create React App

Este projeto foi criado como bootstrapped com [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponiveis

No diretório do projeto voce pode usar:

### `npm start`
Executa o app no modo development
Para vizualisa-lo pode entrar no link ao lado [http://localhost:3000](http://localhost:3000)
A pagina irá mudar quando voce mudar algo no código.
Você também poderá ver os erros do console.


### `npm run build`

Com esse comando, pode fazer a build do app para produção.
Otimiza e agrupa o React corretamante e na melhor performace.


