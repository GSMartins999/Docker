export class DataLancamento {
  private constructor(public readonly value: Date) {}

  static create(value: Date): DataLancamento {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new Error("Data de lançamento é obrigatória e deve ser válida.");
    }

    const hoje = new Date();
    if (value.getTime() > hoje.getTime()) {
      throw new Error("Data de lançamento não pode ser no futuro.");
    }

    return new DataLancamento(value);
  }
}
