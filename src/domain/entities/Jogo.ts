import { NomeDoJogo } from "../value-objects/NomeDoJogo";
import { Descricao } from "../value-objects/Descricao";
import { URL } from "../value-objects/URL";
import { DataLancamento } from "../value-objects/DataLancamento";

export class Jogo {
    private constructor(
        readonly IDJogo: number,
        readonly NomeDoJogo: NomeDoJogo,
        readonly Descricao: Descricao,
        readonly URL: URL,
        readonly DataLancamento: DataLancamento
    ) { }
    static create(
        IDJogo: number,
        NomeDoJogo: NomeDoJogo,
        Descricao: Descricao,
        URL: URL,
        DataLancamento: DataLancamento
    ): Jogo {
        return new Jogo(IDJogo, NomeDoJogo, Descricao, URL, DataLancamento)
    }
}