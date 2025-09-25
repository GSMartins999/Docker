import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";

export class User {
    private constructor(
        readonly IDJogo: number,
        readonly NomeDoJogo: string,
        readonly Descricao: string,
        readonly URL: string,
        readonly DataLancamento: Date
    ) { }
    static create(
        IDJogo: number,
        NomeDoJogo: string,
        Descricao: string,
        URL: string,
        DataLancamento: Date
    ): User {
        return new User(IDJogo, NomeDoJogo, Descricao, URL, DataLancamento)
    }
}