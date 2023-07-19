

 
![Logo SIS](img/logo2.png)


# SIS

Trata-se de um desenvolvimento web que venha a facilitar o conhecimento a respeito de doenças sazonais no Brasil de acordo com a região e a estação do ano (consequentemente o clima predominante).




## Documentação da API

#### Retorna a reincidência de doenças sazonais na região

```http
  GET /api/reincidência
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `região` - `estação` | `string` | **Obrigatório**. A região e a estação do ano a qual deseja saber a reincidência  de doenças sazonais

#### Instancia uma página a qual irá trazer dados a respeito da doença

```http
  GET /api/dados
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome da doença a ser buscada |

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

