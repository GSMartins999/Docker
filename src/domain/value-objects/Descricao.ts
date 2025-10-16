export class Descricao {
  private constructor(public readonly value: string) {}

  static create(value: string): Descricao {
    if (!value || value.trim().length === 0) {
      throw new Error("A descrição é obrigatória.");
    }

    if (value.length < 10) {
      throw new Error("A descrição deve ter no mínimo 10 caracteres.");
    }

    if (value.length > 500) {
      throw new Error("A descrição deve ter no máximo 500 caracteres.");
    }

    return new Descricao(value.trim());
  }
}

