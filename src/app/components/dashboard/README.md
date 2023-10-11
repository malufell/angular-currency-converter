## dashboard

Componente responsável por apresentar uma lista de cards de moeda no contexto de uma aplicação de conversão de moedas. Cada card (componente filho) exibe informações específicas sobre uma moeda.

### Especificações

Este componente serve como um ponto central para exibir e atualizar dinamicamente as informações das moedas.

Adicionalmente, ele gerencia o estado de carregamento e manipula erros.

Possui um método para iniciar uma atualização periódica dos dados da moeda a cada três minutos (180 segundos), mantendo a lista atualizada automaticamente.

Utiliza uma estratégia de cache, armazenando temporariamente os dados da API no localStorage. Os dados são recuperados do cache se estiverem disponíveis e atualizados apenas se necessário, minimizando as chamadas à API para melhorar o desempenho da aplicação.
