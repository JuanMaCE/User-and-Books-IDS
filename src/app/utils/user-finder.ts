import UserRepository from "./user-repository";

export default class UserFinder{
    private readonly repository: UserRepository;

    constructor(repository: UserRepository){
        this.repository = repository;
    }

    public async run(id: string){
        await this.repository.find(id);
    }
}