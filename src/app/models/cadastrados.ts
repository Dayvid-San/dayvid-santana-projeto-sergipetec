export interface Contribuintes {
  id?: number | string;
  nome: string;
  email: string | [] | any;
  cpf: string | number;
  telefone: number | string;
  celular: number | string;
  enderecos:
  [
    {
        rua: string,
        numero: string | number,
        bairro: string,
        cidade: string,
        cep: string | number,
        estado: string,
        pais: string,
    }
  ] | any
}
