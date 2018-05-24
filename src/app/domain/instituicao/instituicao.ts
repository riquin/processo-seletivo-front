import { Mantenedora } from "../mantenedora/mantenedora";

export class Instituicao {
    id: number;
    mantenedora: Mantenedora;
    codigo: string;
    nome: string;
    bairro: string;
    logradouro: string;
    numero: string;
    caixaPostal: string;
    pais: string;
    numeroFiscal: string;
    provincia: string;
    municipio: string;
}
