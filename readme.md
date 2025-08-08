# PROJETO CYBERFLOW

**Integrantes do grupo:**  
- BIANCA PEREIRA MOREIRA 
- EMANUEL MORAES ALMEIDA 
- GIOVANNA GABRIELLY BURDA 
- MAYKON DA COSTA SALVADOR 
- ALAN CORDEIRO MARTINS

---

## API Utilizada

DEEZER API  
[CLIQUE AQUI ⊹ ࣪ ˖](https://developers.deezer.com/api)

---

## Link do Protótipo no Figma

[CLIQUE AQUI ⊹ ࣪ ˖](https://www.figma.com/design/Rz1DUMhDxURiwI04CMQnrp/cyberflow?m=auto&t=moX9mbCpmH5n6nJ6-6)

---

## Tecnologias Usadas

- HTML
- CSS
- JAVASCRIPT
- BOOTSTRAP
- API
- POSTMAN (Teste da API)
- FIGMA (Prototipagem)

## Sobre o App

Este é um app de música com uma estética futurista e interface altamente intuitiva. Ele foi desenvolvido com o objetivo de despertar no usuário a curiosidade e o interesse em explorar ao máximo todas as funcionalidades disponíveis.

Principais funcionalidades:
- Reprodução de músicas.
- Sistema de recomendações (artistas,músicas e etc).
- Campo de busca de albúns e artistas.
- adaptação a diferentes dispositivos.

---

## App em Funcionamento

### Tela 1 (login)
![Print da Tela Inicial ](./imagens/tela-inicial.png)

### Resultados  
![Print da Tela de Resultados](./imagens/tela-resultados.png)

#### escreva aqui como funciona a sua página, e lembre de falar sobre oque sua api faz, função de cada botão e as funcionalidades;3
---

### Tela 2 (página inicial)
![Print da Tela Inicial](./imagens/tela-inicial.png)

### Resultados  
![Print da Tela de Resultados](./imagens/tela-resultados.png)

#### escreva aqui como funciona a sua página, e lembre de falar sobre oque sua api faz, função de cada botão e as funcionalidades;3

---

### Tela 3 (Área de pesquisa)
![Print da Tela Inicial](./imagens/tela-inicial.png)

### Tela de Resultados  
![Print da Tela de Resultados](./imagens/tela-resultados.png)

#### escreva aqui como funciona a sua página, e lembre de falar sobre oque sua api faz, função de cada botão e as funcionalidades;3

---

### Tela 4 (Biblioteca - GIOVANNA)

 #### TELA - modo responsivo

<img src="../projeto-mobile-app-m-sica/assets/TELA MOBILE - GI.png" width= 170px>


#### TELA - modo desktop

<img src="../projeto-mobile-app-m-sica/assets/TELA DESKTOP - GI.png" width=290px>

---

### Tela de Resultados  
### API - implementação e resultado no front-end

#### POSTMAN/ teste da API
<img src="../projeto-mobile-app-m-sica/assets/TESTE NO POSTMAN - GI.png" width=290px>

#### Os endpoints da API foram testados no Postman para validar seu funcionamento e as respostas retornadas. Isso garantiu que a API escolhida estivesse apresentando resultados e não possíveis erros que comprometesse a aplicação.

---

#### RESULTADOS DA API/ front-end
<img src="../projeto-mobile-app-m-sica/assets/RESULTADOS DA API - GI.png" width=200px>

#### Após a implementação da API em JavaScript, o sistema retorna uma prévia de álbuns com base na pesquisa do usuário. Os resultados incluem:

- Capa do álbum (imagem)

- Nome do artista

- Título do álbum

- Botão de ver no Itunes

#### Ao clicar no botão, redireciona o usuário para a página do álbum no iTunes, onde é possível ouvir uma prévia das faixas.

#### Exemplo:
<img src="../projeto-mobile-app-m-sica/assets/PREVIEW DO ÁLBUM - GI.png" width=400px>
 

#### No final dos resultados temos os botões de próximo e anterior para mais resultados!

<img src="../projeto-mobile-app-m-sica/assets/ANTERIOR.PRÓXIMO - GI.png" width= 200px>

---

### BOTÕES E FUNÇÕES

#### Botões superiores e player de música
<img src="../projeto-mobile-app-m-sica/assets/BOTÕES SUPERIORES -GI.png" width=200px>

#### Barra Superior - Navegação Principal
- Playlists: Exibe as playlists criadas pelo usuário.

- Álbuns: Mostra os álbuns de artistas baixados pelo usuário.

- Podcasts: Apresenta os podcasts baixados pelo usuário.

- Criar: Permite ao usuário criar novas playlists personalizadas.

#### Seção Inferior - Player de Música
 - Exibe a última música reproduzida ou a música atual em execução.

 - Permite que o usuário retome a reprodução de onde parou, com controles básicos de player (play/pause).

---

 #### Barra de pesquisa e playlists

 <img src="../projeto-mobile-app-m-sica/assets/BUSCA E PLAYLISTS -GI.png" width= 200px>

#### Botão de pesquisa

- Campo de Pesquisa: Onde o usuário digita sua busca (integrado com a API).

- Botão de Busca: Envia a consulta ao servidor para processamento e retorno dos resultados.

 #### Playlists

- Capa da Playlist

- Imagem personalizada escolhida pelo usuário ao criar a playlist.

- Informações Básicas

- Nome da Playlist: Título atribuído pelo usuário.

- Hashtags: Tags que indicam automaticamente os principais artistas presentes na playlist (geradas com base no conteúdo dos álbuns adicionados).

---

#### Artistas seguidos e navbar

<img src="../projeto-mobile-app-m-sica/assets/ARTISTAS E NAVBAR- GI.png">

#### Artistas seguidos

- Exibe os artistas que o usuário está seguindo em formato de lista contendo a foto do artista.

- Adiciona novos artistas no ícone "+".

- ao clicar na foto do artista o usuário é levado até o perfil do artista.


#### Navbar

- Design responsivo que se adapta a diferentes telas.

- Ícones intuitivos para melhor experiência do usuário.

- Navegação fluida entre as seções do app.

- Observação:
A barra de navegação permanece fixa em todas as páginas, garantindo acesso rápido às principais funcionalidades.

---

#### Pontos importantes!

#### * Dentro do código html foi utilizado alguns códigos para melhorar a acessibilidade, algumas Interação em JavaScript (simples) e a indentação do código.

#### * Possui respostas de erro no JavaScript caso o user digite algo errado ou não existente da API!

<img src="../projeto-mobile-app-m-sica/assets/MENSAGEM DE ERRO 1 - GI.png">
<img src="../projeto-mobile-app-m-sica/assets/MENSAGEM DE ERRO 2 - GI.png">

---

### Tela 5 (Artista/Playlist por dentro)
![Print da Tela Inicial](./imagens/tela-inicial.png)

### Tela de Resultados  
![Print da Tela de Resultados](./imagens/tela-resultados.png)

#### escreva aqui como funciona a sua página, e lembre de falar sobre oque sua api faz, função de cada botão e as funcionalidades;3

---

### Tela 6 (Reprodutor de música)
![Print da Tela Inicial](./imagens/tela-inicial.png)

### Tela de Resultados  
![Print da Tela de Resultados](./imagens/tela-resultados.png)

#### escreva aqui como funciona a sua página, e lembre de falar sobre oque sua api faz, função de cada botão e as funcionalidades;3

---

### Tela 7 (Perfil do usuário)
![Print da Tela Inicial](./imagens/tela-inicial.png)

### Tela de Resultados  
![Print da Tela de Resultados](./imagens/tela-resultados.png)

#### escreva aqui como funciona a sua página, e lembre de falar sobre oque sua api faz, função de cada botão e as funcionalidades;3

---
