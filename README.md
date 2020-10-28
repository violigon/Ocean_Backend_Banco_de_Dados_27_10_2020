# Ocean_Backend_Banco_de_Dados_27_10_2020

# Explicação sobre Banco de Dados

**SQL vs NoSQL**

**NoSQL:** Not-only SQL

**SQL:** trabalha principalmente com relacionamento entre as informações, então fica mais fácil pra gente "amarrar" o dado (conectá-lo de alguma forma).

**SQL** -> Relacionamento entre as informações, utilização de Foreign Key, Inner Join e outros conceitos para buscar informações relacionadas.

**NoSQL** -> Armazenamento de informações mais soltas, e que possuem uma certa independência maior.

## Tecnologias disponíveis

**SQL:** MySQL, MariaDB, PostgreSQL, OracleDB, SQL Server, entre outros, entre outros

**NoSQL:** MongoDB, DynamoDB, Cassandra, Redis, HBase, Neo4j, Firebase Realtime Database, entre outros

### MongoDB

Consigo armazenar documentos completamente diferentes em uma mesma "tabela" (que aqui no mongo, chamamos de `collection`)

Linguagem de consulta (Query Language) para buscar nos documentos, utilizando JavaScript para isso.

## Exemplo de tabela no SQL

Banco de dados para aplicação de envio de mensagens

Tabela `mensagens`:

- `id (int 11)`
- `texto (varchar 255)`
- `usuario (varchar 255)`
- `criado (datetime)`
- `modificado (datetime)`

**Exemplo de query para criação de registro:**

```mariadb
INSERT INTO `mensagens` (`id`, `texto`, `usuario`, `criado`, `modificado`) VALUES (NULL, 'Essa é uma mensagem', 'Paulo Salvatore', '2020-10-27 18:29:38', '2020-10-27 18:29:38');
```

**Exemplo de query para visualização de registros:**

```mariadb
SELECT * FROM `mensagens`;
```

**Exemplo de query para visualizar apenas um registro:**

```mariadb
SELECT * FROM `mensagens` WHERE `mensagens`.`id` = 1;
```

**Exemplo de query para atualização de registros:**

```mariadb
UPDATE `mensagens` SET `texto` = 'Essa é uma mensagem com o texto editado' WHERE `mensagens`.`id` = 1;
```

**Exemplo de query para remoção de registros:**

```mariadb
DELETE FROM `mensagens` WHERE `mensagens`.`id` = 1;
```

## Exemplo de collection (o mesmo que tabela) no MongoDB

As `collections` podem ter QUALQUER estrutura, desde que os registros dela estejam no formato `JSON`.

Então na prática, o que o MongoDB armazena são documentos em `JSON`.

## Conectando NodeJS e MongoDB

No projeto de NodeJS, precisamos de uma biblioteca que consegue falar com o MongoDB.

É muito comum ver tutoriais na internet que utilizam o Mongoose.

Porém, o Mongoose não é a implementação oficial do MongoDB, e sim o próprio driver chamado MongoDB.

Mongoose tem algumas validações de `schema` e um certo padrão para construir as `collections`.

**Exemplo de query para criação de registro:**

```javascript
await mensagens.insertOne(mensagem);
```

**Exemplo de query para visualização de registros:**

```javascript
await collection.find().toArray()
```

**Exemplo de query para visualizar apenas um registro:**

```javascript
await mensagens.findOne({ _id: ObjectId(id) });
```

**Exemplo de query para atualização de registros:**

```javascript
await mensagens.updateOne(
    { _id: ObjectId(id) },
    { $set: mensagem }
);
```

**Exemplo de query para remoção de registros:**

```javascript
await mensagens.deleteOne({ _id: ObjectId(id) });
```

# Instalação e configuração do projeto

1. Baixar o repositório em https://github.com/paulosalvatore/Ocean_Backend_22_10_2020 (clicando em `Code -> Download ZIP`)
2. Extrai o arquivo em um pasta, se possível em `C:/GitHub`
3. Abre essa pasta
4. A partir daqui depende do Node instalado, então garante que a instalação terminou. https://nodejs.org/en/. Também é importante ter o Visual Studio Code instalado. (https://code.visualstudio.com/download)
5. No VS Code, clique em `File -> Open Folder`
6. Procure pela pasta do projeto, abra ela e depois clique em `Selecionar pasta`
7. Vá em `Terminal -> New Terminal` para abrir uma janela do terminal no VS Code
8. No terminal, digite o comando `npm install` ou simplesmente `npm i` e faça a instalação do projeto. Note que isso criará a pasta `node_modules`
9. Para rodar, digite no terminal o comando `node index`. Isso iniciará o servidor na rota `http://localhost:3000`

# Explicação sobre Backend

Servidor

Comunicação é sempre via texto

O que é importante é a estrutura desse texto

Um possível estrutura é o HTML



Servidor de 1 camada

Central de processamento que faz tudo -> Terminal


Servidor de 2 camadas -> Frontend e Backend

Separação entre 2 conceitos importantes:

Frontend: Exibição dos conteúdos (Isso é chamado de Lógica de Apresentação)

Backend: Lógica de negócio (tudo o que é vital para funcionamento da minha aplicação) -> é ele quem acessa o banco de dados


Servidores multicamadas

Frontend e Backend

Backend foi quebrado em diversos SERVIÇOS, ou seja, diversos sisteminhas

Microserviços -> serviços de backend pequenos, cada um com sua responsabilidade


Quais tecnologias envolvidas nesse processo?

Frontend: HTML e CSS para estruturação/visualização. JavaScript para lógica de apresentação
Backend: PHP, C#, Java, JavaScript, Python, C++, Kotlin (apenas 1 delas por serviço)
Banco de Dados: SQL ou MySQL

Como a gente troca ideia com esses 2 caras?

Frontend	 -> 	Backend
Visualização ->		Processar informação (dados) -> Criar, alterar, remover, editar


Frontend -> Requisição HTTP -> Backend recebe a requisição -> Processa a informação -> Envia uma resposta (texto)

Esse texto precisar estar estruturado de uma maneira que o frontend entenda

Paulo;Salvatore;Professor

XML, JSON

Postman

URL -> http://localhost:3000
Endpoint ou Rota -> [GET] /mensagem
Endpoint ou Rota -> [POST] /mensagem

Endpoint: [GET] /mensagem
Descrição: Ler todas as mensagens

Endpoint: [POST] /mensagem
Descrição: Criar uma mensagem

Endpoint: [GET] /mensagem/{id}
Descrição: Ler mensagem específica pelo ID
Exemplo: [GET] /mensagem/1

REST: GET, POST, PUT, DELETE, entre outros
RESTful: aplicação segue as boas práticas de REST (Get para leitura, Post para criação, e nomenclaturas dos endpoints)

