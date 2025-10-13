import { Jogo } from '../../../domain/entities/Jogo';
import { NomeDoJogo } from '../../../domain/value-objects/NomeDoJogo';
import { Descricao } from '../../../domain/value-objects/Descricao';
import { URL } from '../../../domain/value-objects/URL';
import { DataLancamento } from '../../../domain/value-objects/DataLancamento';

describe('Jogo', () => {

  const mockID = 123;
  const mockNome = 'Grand Theft Auto V';
  const mockDescricao = 'Um jogo de ação e aventura em mundo aberto, ambientado em Los Santos.';
  const mockURL = 'https://ogimg.infoglobo.com.br/in/9991682-12c-b99/FT1086A/GTA-V-big.jpg';
  const mockDataLancamento = new Date('2013-09-17');

  it('deve criar uma instância válida de Jogo com todos os Value Objects', () => {
    const jogo = Jogo.create(
      mockID,
      NomeDoJogo.create(mockNome),
      Descricao.create(mockDescricao),
      URL.create(mockURL),
      DataLancamento.create(mockDataLancamento)
    );

    expect(jogo).toBeInstanceOf(Jogo);
    expect(jogo.IDJogo).toBe(mockID);
    expect(jogo.NomeDoJogo.value).toBe(mockNome);
    expect(jogo.Descricao.value).toBe(mockDescricao);
    expect(jogo.URL.value).toBe(mockURL);
    expect(jogo.DataLancamento.value.getTime()).toBe(mockDataLancamento.getTime());
  });


  it('deve lançar um erro ao tentar criar um Value Object inválido', () => {
    const descricaoInvalida = '';

    expect(() => {
        Jogo.create(
            1,
            NomeDoJogo.create('Teste'),
            Descricao.create(descricaoInvalida),
            URL.create('https://valida.com'),
            DataLancamento.create(new Date())
        );
    }).toThrow('Invalid description');
  });

});