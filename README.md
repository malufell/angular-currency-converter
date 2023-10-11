# Currency Converter

Uma aplicação que exibe a conversão de moedas para real brasilleiro (BRL), contemplando Dólar Canadense, Peso Argentino e Libra Esterlina!

▶️ Está no ar: https://malufell.github.io/angular-currency-converter/

</br>

<img width="600" src="https://github.com/malufell/career-plan/assets/62160705/3b2346c8-7fc6-453f-a77e-4d636f25fd83" />

## 💻 Sobre o projeto

- Desenvolvido com Angular versão 16;
- Utiliza SASS para os estilos seguindo o padrão BEM para estrutura do CSS;
- ESLint e prettier para formatação do código;

## 🧭 Como executar o projeto localmente

Atenção aos pré-requisitos que devem estar instalados na sua máquina:

- **Node.js**, download disponível [aqui](https://nodejs.org/en)
- **GIT**, disponível para donwload [aqui](https://git-scm.com/)
- **Angular CLI**, instale globalmente usando o seguinte comando no terminal: `npm install -g @angular/cli` ou `yarn global add @angular/cli`

### Passos para rodar o projeto:

1. faça o clone do projeto, executando o comando: `git clone https://github.com/malufell/angular-currency-converter.git`
2. entre na pasta do projeto, comando: `cd angular-currency-converter`
3. instale as dependências do projeto, comando: `npm install`
4. inicie o servidor de desenvolvimento, comando: `ng serve`
5. no navegador acesse o endereço `http://localhost:4200` para ver o projeto em ação!

### Comandos úteis:

- Compilar o Projeto: `ng build`
- Ajuda do Angular CLI: `ng help`
- Executar Testes: `ng test`

Ao rodar os testes unitários, uma nova janela do navegador será aberta com o resultado, exemplo:

<img width="300" src="https://github.com/malufell/angular-currency-converter/assets/62160705/33c7c414-a6ee-4510-b880-2dad9e01bfe9"/>



</br>

## 📄 Documentação de apoio sobre a aplicação

- O app possui duas features principais dentro da pasta `components`:
  - o card que está documentado [aqui](https://github.com/malufell/angular-currency-converter/tree/main/src/app/components/currency-card) e
  - o dashboard documentado [aqui](https://github.com/malufell/angular-currency-converter/tree/main/src/app/components/dashboard).

📂 Estruturação do código fonte da aplicação (src):

```
/angular-currency-converter
├── /src/                           # Código-fonte da aplicação
│   ├── /app/                       # Módulos e componentes principais
│   │   ├── /components/            # Componentes
│   │   ├── /services/              # Serviços para integração com API
│   │   ├── /models/                # Modelos de dados da aplicação
│   │   ├── app.component           # Componente principal da aplicação
│   │   └── app.module.ts           # Módulo principal da aplicação
│   │
│   ├── /assets/                    # Arquivos estáticos (imagens e estilos)
│   ├── /environments/              # Urls externas utilizadas na aplicação (API)
│   ├── /styles/                    # Arquivos de estilo (estilo global e variáveis SASS)
│   └── index.html                  # Página HTML principal
│
└── arquivos de configuração...     # Configurações do projeto e dependências
```

## 📱Disponível também na versão Mobile:

<img width="300" src="https://github.com/malufell/career-plan/assets/62160705/e4f1dc85-b7df-4aa6-94e9-14f04fe50077"/>
