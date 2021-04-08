# desafio4linux
Projeto com proposta educacional

O projeto é tem como linguagens Python(Back-end) utilizando o DJANGO REST e JavaScript(Front-end) utilizando ReactJs

A API do python está no localhost e apresenta duas rotas
 ```
 http://127.0.0.1:5000/profile
 http://127.0.0.1:5000/login
 ```
 
O servidor frontend está está no localhost e apresenta duas rotas
 ```
 http://127.0.0.1:5000/
 http://127.0.0.1:5000/login
 ```
 
 As autenticações estão feitas devidamente como pedido no roteiro

Para o pessoal da 4linux:
<br>
 -A pasta do projeto foi divida em três subpastas
 <br>
 <br>
  -API
    <br>
     1.Nessa pasta foi feito o backend da API em Django REST
    <br>
     2.Para validação do login utilizei uma Biblioteca chamada IsAuthenticated, essa biblioteca faz todo o processo de autenticação de login retornando um chave Token utilizei   essa biblioteca devido a sua facilidade e eficácia para trabalhar com autenticação
    <br>
     3.Montei uma metado na views para buscar os dados da API publica e para pegar esses dados apenas se estivesse autenticado
  <br>
  <br>
  -Desafio
   <br>
    1.Aqui contem os arquivos de configuração da API
   <br>
   <br>
  -frontend
  <br>
     1.Todo o front foi feito em React, criei duas páginas como solicitado, para acessar a página principal é necessário estar com o token armazenado no localstorage do navegador toda vez que entrar na pagina de login e efetuar com sucesso o token é adicionado no localstorage assim podendo acessar a página principal.
    <br>
     2.Nota que ao entrar na página principal fiz limpei o localstorage para que toda vez seja necessário fazer o login, isso foi feito de proposito para uma "segurança" na      página.
    <br>
    <br>
  -Notas
  <br>
     1.Podia ter feito uma páginação devido a grande quantidade de retornos, eu tenho a capacidade de fazer mas devido ao tempo que não me tinha sobrando optei por deixar assim.
    <br>
     2.Podia ter colocado o projeto em um docker, tive um problema com o ambiente do python e devido, como estava muito travado em relação ao tempo opitei por deixar assim.
    <br>
     3.Utilizei o SQLite por facilidade na instalação, podia ter feito em um banco relacional qualquer e não relacional.
    
    
<h3>COMO A PORTA 80 JÁ ESTAVA SENDO USADA COLOQUEI O FRONTEND NA PORTA 1337(SIM TEM HAVER COM A MÚSICA)<h3>
 
 
 <h3>Caso apresente algum problema na execução</h3>
 Para iniciar o projeto criei um shellscript chamado exec.sh, está localizado no diretorio principal do projeto.
 
 ```
 ./exec.sh
 ```
 
Caso o shell script apresentar algum problema, execute o arquivo manage.py que está localizado no diretorio principal do projeto.

```
sudo python3 manage.py runserver 0.0.0.0:5000
```

Dai execute o servidor do frontend no diretorio do frontend

```
npm start
```

Se necessário

```
npm install
```

    
