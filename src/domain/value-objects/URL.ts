export class URL {
  private constructor(public readonly value: string) {}

  static create(value: string): URL {
    if (!value || value.trim().length === 0) {
      throw new Error("A URL é obrigatória.");
    }
    if (!/^https?:\/\//.test(value)) {
      throw new Error("O formato da URL é inválido. Deve começar com http:// ou https://");
    }
    try {
      new globalThis.URL(value);
    } catch {
      throw new Error("O formato da URL é inválido. Deve começar com http:// ou https://");
    }
    return new URL(value);
  }
}
