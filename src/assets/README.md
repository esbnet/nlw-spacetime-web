![imagem de configurações](./src/assets/arch-front.png)

<div align="center">

![imagem de configurações](./src/assets/logo.png)
![imagem de configurações](./src/assets/rocketseat-logo.svg)

</div>


# Space Time
## Rede Social para Devs

Este aplicativo tem como objetivo permitir o registro de um acontecimento através de um post informando uma imagen/vídeo e um texto descrevendo o fato.

Nela foi criado tando o back-end como front-end e mobile, permitindo o experimento de tecnologias das três áreas de atuação. Para isto é feito a autenticação no Github e mediante autorização se obtem um código que é enviado para o backent autenticar e retornar um token que manterá a sessão ativa e pertitirá que o usuário interaja com a aplicação.

Aqui, iremos detalhar as funcionalidades e recursos utilizados no front-end.

![imagem de configurações](./src/doc/home.png)

------

<a name="ancora"></a>
- [Techs](#techs)
- [Instação e Execução](#install)
- [Funcionalidades](#feature)
- [Registrar Aplicação OAuth - Github ](#registroGithub)


<a id="techs"></a>
## Techs 
- React
- Next
- Typescript
- Tailwind
- Axios
- Dayjs
- js-cookie
- jwt-decode
- Eslint

<a id="install"></a>
## Como Instalar e Rodar a Aplicação
1. Criar no github uma aplicação [Veja como](#registroGithub)
```
    CLIENT_ID
```
2. Clonar o projeto: 
```
    git clone https://github.com/esbnet/nlw-spacetime-web.git
```
3. Entrar na pasta do projeto:  
```
    cd nlw-spacetime-web
```
4. Instalar dependências: 
```
    npm install
```
5. Rodar o aplicativo: 
```
    npm run dev
```
6. Criar na pasta raiz o arquivo 
```
    .env.local
```
7. Criar a variável: 
```
    NEXT_PUBLIC_GITHUB_CLIENT_ID=código_client_id_gerado_no_git
```
8. Criar a variável contendo endereço e porta do servidor (back-end/api)
```
    NEXT_PUBLIC_SERVER_URL=http://0.0.0.0:3333
```

<a id="feature"></a> 
## Funcionalidades

- [x] Login / Registro
- [x] Logout
- [x] Inclusão de memória
- [ ] Edição de memória
- [ ] Deleção de memória
- [ ] Filtro de data

<a id="Registrar"></a>
## Login / Registro

Ao logar no aplicativo você obtêm sua lista de memórias registradas e está pronto para matar a saudade ou registrar novas memórias.

![imagem de configurações](./src/doc/logado.png)


## Inclusão de memória

Clique em adicionar mídia, ecolha uma imagem que represente o momento, informe se irá ficar pública ou não, descreva o momento com os detalhes que achar necessário e clique em salvar. Pronto!😎 Sua memória foi registrada e poderá recordá-la sempre que sentir vontade.

![imagem de configurações](./src/doc/new.png)

<a id="registroGithub"></a>
## Registrar nova aplicação OAuth no Github 

Abaixo você encontra o passo-a-passo para criar as credencias para que sua aplicação possa realizar a autenticação via Github.

Atalho:
[https://github.com/settings/applications/new](https://github.com/settings/applications/new)

| Passos      |tela        |
| ----------- |:-------------:|
| 1. Clique em settins|![imagem de configurações](./src/doc/settins.png)|
| 2. Clique em Developer settings|![imagem de configurações](./src/doc/dev_settins.png)|
| 3. Clique em OAuth|![imagem de configurações](./src/doc/OAuth.png)|
| 4. Clique em New OAuth App|![imagem de configurações](./src/doc/new_app.png)|
| 5. Preencha os campos com os dados abaiso: <br>spacetime-web<br>http://localhost:3000<br>(opcional)<br>http://localhost:3000/ (para onde será redirecionado após o login)|![imagem de configurações](./src/doc/OAuthAplication.png)|

