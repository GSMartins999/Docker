import { Jogo } from '../entities/Jogo';

export interface JogoRecord {
    save(jogo: Jogo): Promise<void>;
    update(jogo: Jogo): Promise<void>;
    delete(IDJogo: number): Promise<void>;
    findByJogoName (NomeDoJogo: string): Promise <Jogo[]>;
    findByDataLancamento(DataLancamento: Date): Promise<Jogo | null>;
    findById(IDJogo: number): Promise< Jogo| null>;
    findAll(): Promise<Jogo[]>;
}
