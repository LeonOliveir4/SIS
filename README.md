<div style="display: flex; justify-content: center;">
  <img src="img/logo2.png" alt="Logo SIS" width="200" height="200">
</div>

# SIS

Trata-se de um desenvolvimento web que venha a facilitar o conhecimento a respeito de doenças sazonais no Brasil de acordo com a região e a estação do ano (consequentemente o clima predominante).

## Subir servidor

Para rodar o projeto rode os comandos

```bash
  node -v (verificar se o node está instalado)
  npm -v (verificar se o npm está instalado)
  npm install (isso no diretório raiz)
  npm run start
```

## Documentação da API

#### Retorna a reincidência de doenças sazonais na região

```http
  GET /regiao
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `região` - `estação` | `string` | **Obrigatório**. Pode passar ou não os valores

#### Instancia uma página a qual irá trazer dados a respeito da doença

```http
  GET /doenca
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `idDoença`      | `string` | **Obrigatório**. o id da doença a ser buscada |

## Autores
### Link para o perfil dos autores no GitHub
- [@Camila](https://github.com/CamilaASantos) 
- [@Daniel](https://github.com/ddomontenegro)
- [@Henrique](https://github.com/henriquefsa98)
- [@Leonardo](https://github.com/leonardo-Pires-de-Oliveira)


## Referências

 - [Saúde na Região x]() -> linkar ao consultar fontes recentes
 - [Saúde na Região x na estação y]() -> linkar ao consultar fontes recentes
 - []() -> linkar ao consultar fontes recentes
