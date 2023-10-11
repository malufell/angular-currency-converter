export interface Currency {
  code: string;
  name: string;
  bid?: number;
  pctChange?: number;
  create_date?: string;
}

export const CURRENCIES_MAPPER_INITIAL_STATE: Currency[] = [
  { code: 'CAD', name: 'Dólar Canadense' },
  { code: 'ARS', name: 'Peso Argentino' },
  { code: 'GBP', name: 'Libra Esterlina' },
];
