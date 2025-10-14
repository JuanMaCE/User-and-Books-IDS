import { User } from "./user";
import UserRepository from "./user-repository";

export default class UserCreator {
    private readonly repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    public async run(email: string, dpi: string, name: string, age: string, password: string, isactivated: string) {
        const params = { email, dpi, name, age, password, isactivated }
        const user = User.create(params);
        await this.repository.save(user);
    }

}

