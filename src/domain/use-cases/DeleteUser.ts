import { IUserRepository } from "../repositories/UserRepository";

export class DeleteUser {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute({ id }: { id: string }) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            return;
        }
        await this.userRepository.delete(id);
    }

}