# Vacina Kids

Aplicação web desenvolvida para auxiliar responsáveis no acompanhamento da vacinação infantil, permitindo visualizar vacinas aplicadas, vacinas previstas, vacinas atrasadas e campanhas de vacinação ativas de forma simples e intuitiva.

## Demonstração

🔗 Aplicação Online: https://desafio-vacinas-infantis.web.app

## Funcionalidades

- Visualização do histórico vacinal de cada criança.
- Identificação de vacinas aplicadas.
- Identificação de vacinas previstas.
- Identificação de vacinas atrasadas.
- Exibição de campanhas de vacinação ativas.
- Acompanhamento individual de múltiplas crianças.
- Interface responsiva e intuitiva.
- Integração com Firebase Firestore para armazenamento dos dados.

## Cenários Implementados

### Cenário 1
Uma criança possui vacinas previstas para sua faixa etária. O responsável consegue identificar facilmente quais vacinas já foram realizadas e quais ainda precisam de atenção.

### Cenário 2
Uma vacina possui data prevista já ultrapassada e ainda não foi aplicada. O responsável consegue identificar que existe uma pendência relacionada à vacinação.

### Cenário 3
Existe uma campanha de vacinação ativa para determinado público infantil. O responsável consegue visualizar essa informação dentro da aplicação.

### Cenário 4
Uma família possui mais de um filho, com idades diferentes e situações vacinais distintas. O responsável consegue acompanhar individualmente cada criança sem gerar confusão entre os históricos e informações apresentadas.

## Tecnologias Utilizadas

- Angular
- Ionic
- TypeScript
- Firebase Firestore
- Firebase Hosting
- HTML5
- CSS3

## Estrutura do Projeto

```text
src/
├── app/
│   ├── data/
│   ├── models/
│   ├── services/
│   ├── app.ts
│   ├── app.html
│   └── app.css
├── environments/
└── main.ts
```

## Como Executar o Projeto

### Instalar dependências

```bash
npm install
```

### Executar em ambiente de desenvolvimento

```bash
npm start
```

ou

```bash
ng serve
```

### Gerar build de produção

```bash
ng build
```

## Deploy

O projeto utiliza Firebase Hosting para publicação.

Para publicar uma nova versão:

```bash
ng build
firebase deploy
```
