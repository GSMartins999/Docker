import { JogoRecord } from "../repositories/JogoRepository";

export class RemoveJogo {
  constructor(private readonly JogoRepository: JogoRecord) {}

  async execute(IDJogo: number): Promise<void> {
    const jogo = await this.JogoRepository.findById(IDJogo);

    if (!jogo) {
      return;
    }

    await this.JogoRepository.delete(IDJogo);
  }
}