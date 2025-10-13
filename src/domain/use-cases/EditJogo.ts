import { Jogo } from "../entities/Jogo";
import { JogoRecord } from "../repositories/JogoRepository";
import { NomeDoJogo } from "../value-objects/NomeDoJogo";
import { Descricao } from "../value-objects/Descricao";
import { DataLancamento } from "../value-objects/DataLancamento";
import { URL } from "../value-objects/URL";

export class EditJogo {
  constructor(private readonly jogoRepository: JogoRecord) {}

  async execute(params: {
    IDJogo: number;
    NomeDoJogo?: string;
    Descricao?: string;
    URL?: string;
    DataLancamento?: Date;
  }): Promise<Jogo> {
    const { IDJogo, NomeDoJogo: nome, Descricao: desc, URL: url, DataLancamento: data } = params;

    const existingJogo = await this.jogoRepository.findById(IDJogo);
    if (!existingJogo) {
      throw new Error("Jogo não encontrado");
    }

    const nomeVO = nome ? NomeDoJogo.create(nome) : existingJogo.NomeDoJogo;
    const descVO = desc ? Descricao.create(desc) : existingJogo.Descricao;
    const urlVO = url ? URL.create(url) : existingJogo.URL;
    const dataVO = data ? DataLancamento.create(data) : existingJogo.DataLancamento;

    const updatedJogo = Jogo.create(
      existingJogo.IDJogo,
      nomeVO,
      descVO,
      urlVO,
      dataVO
    );

    await this.jogoRepository.update(updatedJogo);

    return updatedJogo;
  }
}
