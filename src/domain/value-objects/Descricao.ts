export class Descricao {
  private constructor(public readonly value: string) {}

  static create(value: string): Descricao {
    if (!value || value.trim().length === 0) {
      throw new Error("A descrição não pode estar vazia.");
    }
    if (value.length > 1000) {
      throw new Error("A descrição é muito longa (máx. 1000 caracteres).");
    }
    return new Descricao(value.trim());
  }
}
