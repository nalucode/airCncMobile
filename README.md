### A aplicação

Este aplicativo compõe um projeto desenvolvido durante a semana oministack, realizado pela RocketSeat. Nela, desenvolvemos uma aplicação base para compartilhamento de escritórios.
O projeto se compões de :
- Backend contruido com NodeJS,MongoDB e express.js;
- WebApp de administração contruido em ReactJS;
- Mobile contruido com React-Native e Socket.Io;

# Construção do App 

[![AirCnc_logo](https://i.imgur.com/vqdhqGZ.png "AirCnc_logo")](# "AirCnc_logo")

A aplicação foi dividida em 3 páginas: Login, Lista de Spots e Página de Reservas.
Todas essas páginas são alimentadas por uma api construida no backend, que trás e envia as informações necessárias para criar usuário, receber lista de escritórios organizados por categoria e para solicitar uma reserva.

Página de Login
=============

Nesta página, é solicitado um e-mail e as tecnologias que possui interesse.

![Página de login](https://i.imgur.com/PONYmiG.jpg "Página de login")

Lista de Spots
=============

Nesta página, a aplicação recebe da api a lista de spots compativeis com as tecnologias informadas no login, listando as informando valor, nome e foto.
[![List Spots](https://i.imgur.com/xr3VSTS.jpg "List Spots")](# "List Spots")
