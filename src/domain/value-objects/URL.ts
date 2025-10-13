export class URL {
  private constructor(public readonly value: string) {}

  static create(value: string): URL {
    try {
      new globalThis.URL(value);
      return new URL(value);
    } catch {
      throw new Error("URL inválida.");
    }
  }
}
