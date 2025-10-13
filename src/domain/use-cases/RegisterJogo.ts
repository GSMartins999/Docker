import { Jogo } from "../entities/Jogo";
import { JogoRecord } from "../repositories/JogoRepository";
import { NomeDoJogo } from "../value-objects/NomeDoJogo";
import { Descricao } from "../value-objects/Descricao";
import { DataLancamento } from "../value-objects/DataLancamento";
import { URL } from "../value-objects/URL";

export class RegisterJogo {
  constructor(private readonly jogoRepository: JogoRecord) {}

  async execute(params: {
    NomeDoJogo: string;
    Descricao: string;
    URL: string;
    DataLancamento: Date;
  }): Promise<Jogo> {
    const { NomeDoJogo: nome, Descricao: desc, URL: url, DataLancamento: data } = params;

    const nomeVO = NomeDoJogo.create(nome);
    const descricaoVO = Descricao.create(desc);
    const urlVO = URL.create(url);
    const dataVO = DataLancamento.create(data);

    const IDJogo = Math.floor(Math.random() * 1000000);

    const jogo = Jogo.create(IDJogo, nomeVO, descricaoVO, urlVO, dataVO);

    await this.jogoRepository.save(jogo);

    return jogo;
  }
}
