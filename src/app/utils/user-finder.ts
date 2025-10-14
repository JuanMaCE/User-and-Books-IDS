import { User } from "./user";
import UserRepository from "./user-repository";

export default class UserFinder {
    private readonly repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    public async run(id: string): Promise<User> {
        const user = await this.repository.find(id);
        return user;
    }
}
