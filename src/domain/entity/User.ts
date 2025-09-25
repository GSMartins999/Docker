import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";

export class User {
    private constructor(
        readonly id: string,
        readonly email: Email,
        readonly password: Password
    ) { }
    static create(
        id: string,
        email: Email,
        password: Password
    ): User {
        return new User(id, email, password)
    }
}