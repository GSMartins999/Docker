export class DataLancamento {
  private constructor(public readonly value: Date) {}

  static create(value: Date): DataLancamento {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new Error("Data de lançamento inválida.");
    }

    const hoje = new Date();
    if (value > hoje) {
      throw new Error("A data de lançamento não pode ser no futuro.");
    }

    return new DataLancamento(value);
  }
}
