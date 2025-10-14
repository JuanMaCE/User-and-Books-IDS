import { User } from "./user";
import UserRepository from "./user-repository";

export default class UserCreator {
    private readonly repository: UserRepository;

    constructor(repository: UserRepository){
        this.repository = repository;
    }

    public async run(id: string, email: string, dpi: string, name: string, age: string, isValid: string){
        const params = {id, email, dpi, name, age, isValid}
        const user = User.create(params);
        await this.repository.save(user);
    }

}