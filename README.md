# Jogo da Forca

## Renderizar estado inicial

- O estado inicial deve contar com as teclas e o input desabilitados
- A forca deve ser renderizada com o botão ao lado (como se fosse uma sidebar); estilizar forca

### Jogo

- Renderizar forca no estado inicial
- Renderizar botão "escolher palavra"
- Importar palavras do arquivo ```palavras.js``` que contém a array de strings de palavras que serão adivinhadas

### Letras

- Importar letras do arquivo ```letras.js```
- Renderizar como o teclado na tela (inativo)

### Chute

- Renderizar texto, input e botão (botão desativado)

## Escolher palavra

- Sortear uma palavra da array
- Exibir palavra em formato de "underline" (letras escondidas, separar string em array)
- Ativar teclado na tela (letras)
- Ativar input na tela (chute)

## Progresso do jogo

### Ao apertar letras

- Comparar a letra apertada com as letras da palavra
- Se a letra for igual, exibir a letra nos respectivos lugares no lugar do "underline"
- Se a letra for diferente, trocar a imagem da forca e mudar o contador
- Desativar a letra no teclado

### Ao usar chute

- Caso a palavra seja igual, preencher todos os "underlines" pela palavra
- Caso a palavra seja diferente, pular para a última imagem da forca
- Ativar o final do jogo

## Fim de jogo

### Ganhou

### Perdeu
