# Documentação da API de Pesquisa de Satisfação do Cliente

## Introdução

Esta API foi desenvolvida para gerenciar pesquisas de satisfação do cliente para uma empresa de vendas online de roupas. A API permite criar, atualizar, preencher e listar pesquisas de satisfação. Além disso, exportar os preenchimentos em CSV.

## Tecnologias Utilizadas

- **NestJS**
- **TypeScript**
- **PostgreSQL**
- **TypeORM**
- **Docker**
- **Docker Compose**

## Requisitos

- **Node.js** (v14 ou superior)
- **Docker** e **Docker Compose**

## Configuração e Execução

### Passo 1: Clonar o Repositório

Clone o repositório para sua máquina local:

## Endpoints da API

As requests podem ser feitas via Insomnia ou similares.

1. Criar uma Pesquisa de Satisfação
URL: /surveys
Método: POST
Corpo da Requisição:

```bash
{
  "targetAudience": "Geeks",
  "starRating": 5,
  "contactEmail": "example@example.com"
}
```
Resposta

```bash
{
  "id": 1,
  "targetAudience": "Geeks",
  "starRating": 5,
  "contactEmail": "example@example.com",
  "createdAt": "2024-06-15T00:00:00.000Z",
  "updatedAt": "2024-06-15T00:00:00.000Z"
}
```
## 2. Atualizar uma Pesquisa de Satisfação
URL: /surveys/:id
Método: PUT
Parâmetros de URL: id (ID da pesquisa)

```bash
{
  "targetAudience": "Minimalistas",
  "starRating": 4,
  "contactEmail": "updated@example.com"
}
```
Resposta de Sucesso:

```bash
{
  "id": 1,
  "targetAudience": "Minimalistas",
  "starRating": 4,
  "contactEmail": "updated@example.com",
  "createdAt": "2024-06-15T00:00:00.000Z",
  "updatedAt": "2024-06-15T12:00:00.000Z"
}
```

## 3. Preencher uma Pesquisa de Satisfação
URL: /surveys/fill
Método: POST
Corpo da Requisição:

```bash
{
  "surveyId": 1,
  "response": "Muito satisfeito com o produto!"
}
```
Resposta de Sucesso:
```bash
{
  "id": 1,
  "surveyId": 1,
  "response": "Muito satisfeito com o produto!",
  "createdAt": "2024-06-15T00:00:00.000Z"
}
```

## 4. Listar Preenchimentos pelo Público-alvo
URL: /surveys/fills
Método: GET

Parâmetros de Consulta:

audience (obrigatório): O público-alvo a ser filtrado.

order (opcional): ASC para ordem crescente, DESC para ordem decrescente.

Exemplo de URL: /surveys/fills?audience=Geeks&order=ASC

Resposta de Sucesso:

```bash
[
  {
    "id": 1,
    "response": "Muito satisfeito com o produto!",
    "createdAt": "2024-06-15T00:00:00.000Z",
    "survey": {
      "id": 1,
      "targetAudience": "Geeks",
      "starRating": 5,
      "contactEmail": "example@example.com",
      "createdAt": "2024-06-15T00:00:00.000Z",
      "updatedAt": "2024-06-15T00:00:00.000Z"
    }
  }
]
```

## 5. Exportar Preenchimentos em CSV
URL: /surveys/export/csv
Método: GET

Resposta de Sucesso:

Um arquivo CSV contendo os preenchimentos das pesquisas.

Testes
Para executar os testes unitários, utilize o seguinte comando:

```bash
npm run test
```