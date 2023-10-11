## currency-card

Componente responsável por exibir um cartão com informações sobre a moeda a ser convertida.

O card possui três estados possíveis:

- **Estado de Carregamento**: Controlado pela propriedade `isLoading`, este estado exibe um indicador de carregamento no card enquanto os dados estão sendo buscados.
- **Estado com Dados Carregados**: Quando a propriedade currencyDetails contém os atributos "bid" e "create_date", o cartão assume que a moeda a ser exibida já possui as informações necessárias. Ele renderiza o preço de compra (bid), a variação percentual e o horário da última atualização.
- **Estado de Erro**: Em caso de erro, uma mensagem de erro é exibida juntamente com um botão "RECARREGAR". Ao clicar no botão, o evento reload é emitido, indicando ao componente pai que o usuário deseja tentar buscar os dados da moeda novamente.

### Propriedades

- currencyDetails: representa os dados da moeda que será exibida no card.
- isLoading: indica se o cartão está no estado de carregamento (true) ou não (false).

### Eventos

- reload: emitido quando o botão "RECARREGAR" no cartão é clicado. Ele indica ao componente pai que o usuário deseja recarregar os dados da moeda que está em estado de erro.

### Especificações

O estilo aplicado ao valor de compra (bid) da moeda é aplicado conforme segue:

- valor menor ou igual a 1 = vermelho
- valor maior do que 1 menor e menor ou igual a 5 = verde
- valor maior do que 5 = azul
