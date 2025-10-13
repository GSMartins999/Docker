import { IUserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { Email } from '../../domain/value-objects/Email';
import { Password } from '../../domain/value-objects/Password';

export class MockUserRepository implements IUserRepository {
  private static instance: MockUserRepository;
  private users: User[] = [{
    id: 'user-1',
    email: Email.create('gio@gmail.br'),
    password: Password.create('12345@aA')
  },{
    id: 'user-2',
    email: Email.create('amanda@hotmail.com'),
    password: Password.create('AAAaaa01!')
  }];

  private constructor() {}

  public static getInstance(): MockUserRepository {
    if (!MockUserRepository.instance) {
      MockUserRepository.instance = new MockUserRepository();
    }
    return MockUserRepository.instance;
  }
  
  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email.value === email) || null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async update(user: User): Promise<void> {
    const userIndex = this.users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      this.users[userIndex] = user;
    }
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter(user => user.id !== id);
  }
  
  public reset(): void {
    this.users = [];
  }
}