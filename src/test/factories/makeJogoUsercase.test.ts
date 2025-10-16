import { makeJogoUseCase } from './../../factories/makeJogo';
import { RegisterJogo } from '../../domain/use-cases/RegisterJogo';
import { EditJogo } from '../../domain/use-cases/EditJogo';
import { RemoveJogo } from '../../domain/use-cases/RemoveJogo';
import { MockJogoRepository } from '../../infra/mocks/MockJogoRepository';

describe('makeJogoUseCase Factory', () => {
  it('deve retornar instâncias válidas dos casos de uso de jogo', () => {
    const { createJogo, editJogo, removeJogo } = makeJogoUseCase();

    expect(createJogo).toBeInstanceOf(RegisterJogo);
    expect(editJogo).toBeInstanceOf(EditJogo);
    expect(removeJogo).toBeInstanceOf(RemoveJogo);
  });

  it('deve garantir que todos os casos de uso compartilham o mesmo repositório singleton', () => {
    const { createJogo, editJogo, removeJogo } = makeJogoUseCase();

    const repo1 = (createJogo as any).jogoRepository;
    const repo2 = (editJogo as any).jogoRepository;
    const repo3 = (removeJogo as any).jogoRepository;

    expect(repo1).toBe(repo2);
    expect(repo2).toBe(repo3);
    expect(repo1).toBeInstanceOf(MockJogoRepository);
  });

});
