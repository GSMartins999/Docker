export class NomeDoJogo {
  private constructor(public readonly value: string) { }

  static create(value: string): NomeDoJogo {
    if (!value || value.trim().length === 0) {
      throw new Error("O nome do jogo é obrigatório.");
    }
    if (value.length < 2) {
      throw new Error("O nome do jogo deve ter pelo menos 2 caracteres.");
    }
    if (value.length > 150) {
      throw new Error("O nome do jogo deve ter no máximo 150 caracteres.");
    }
    return new NomeDoJogo(value.trim());
  }
}
