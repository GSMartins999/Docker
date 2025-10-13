import { JogoRecord } from "../repositories/JogoRepository";

export class RemoveJogo {
  constructor(private readonly JogoRepository: JogoRecord) {}

  async execute(IDJogo: number): Promise<void> {
    const jogo = await this.JogoRepository.findById(IDJogo);

    if (!jogo) {
      throw new Error("Jogo não encontrado");
    }

    await this.JogoRepository.delete(IDJogo);
  }
}