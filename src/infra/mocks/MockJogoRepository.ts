import { MockUserRepository } from './MockUserRepository';
import { Jogo } from '../../domain/entities/Jogo';
import { JogoRecord } from '../../domain/repositories/JogoRepository';
import { NomeDoJogo } from '../../domain/value-objects/NomeDoJogo';
import { Descricao } from '../../domain/value-objects/Descricao';
import { URL } from '../../domain/value-objects/URL';
import { DataLancamento } from '../../domain/value-objects/DataLancamento';

export class MockJogoRepository implements JogoRecord {
  private static instance: MockJogoRepository;
  
  private jogos: Jogo[] = [
    Jogo.create(
      1,
      NomeDoJogo.create('The Legend of Zelda: Ocarina of Time'),
      Descricao.create('Um jogo de ação-aventura épico.'),
      URL.create('https://www.exemplo.com/zelda.jpg'),
      DataLancamento.create(new Date('1998-11-21T00:00:00Z'))
    ),
    Jogo.create(
      2,
      NomeDoJogo.create('Cyberpunk 2077'),
      Descricao.create('RPG de ação-aventura em mundo aberto ambientado em Night City.'),
      URL.create('https://www.exemplo.com/cyberpunk.jpg'),
      DataLancamento.create(new Date('2020-12-10T00:00:00Z'))
    )
  ];

  private constructor() {}

  public static getInstance(): MockJogoRepository {
    if (!MockJogoRepository.instance) {
      MockJogoRepository.instance = new MockJogoRepository();
    }
    return MockJogoRepository.instance;
  }

  async save(jogo: Jogo): Promise<void> {
    this.jogos.push(jogo);
  }

  async findById(IDJogo: number): Promise<Jogo | null> {
    return this.jogos.find(jogo => jogo.IDJogo === IDJogo) || null;
  }

  async findAll(): Promise<Jogo[]> {
    return this.jogos;
  }

  async update(jogo: Jogo): Promise<void> {
    const jogoIndex = this.jogos.findIndex(j => j.IDJogo === jogo.IDJogo);
    if (jogoIndex !== -1) {
      this.jogos[jogoIndex] = jogo;
    }
  }

  async delete(IDJogo: number): Promise<void> {
    this.jogos = this.jogos.filter(jogo => jogo.IDJogo !== IDJogo);
  }

  async findByJogoName(NomeDoJogo: string): Promise<Jogo[]> {
    const termoBusca = NomeDoJogo.toLowerCase();
    
    return this.jogos.filter(jogo => 
      jogo.NomeDoJogo.value.toLowerCase().includes(termoBusca)
    );
  }

  async findByDataLancamento(DataLancamento: Date): Promise<Jogo | null> {
    const dataBusca = DataLancamento.toISOString().split('T')[0]; 
    
    return this.jogos.find(jogo => 
      jogo.DataLancamento.value.toISOString().split('T')[0] === dataBusca
    ) || null;
  }
  
  public reset(): void {
    this.jogos = [];
  }
}