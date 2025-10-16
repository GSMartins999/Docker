import { RegisterJogo } from '../domain/use-cases/RegisterJogo';
import { EditJogo } from '../domain/use-cases/EditJogo';
import { RemoveJogo } from '../domain/use-cases/RemoveJogo';
import { MockJogoRepository } from '../infra/mocks/MockJogoRepository';

const jogoRepository = MockJogoRepository.getInstance();

export const makeJogoUseCase = () => ({
  registerJogo: new RegisterJogo(jogoRepository),
  editJogo: new EditJogo(jogoRepository),
  removeJogo: new RemoveJogo(jogoRepository)
});
