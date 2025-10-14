import PostgresUserRepository from "./postgres-user-repository";

export default class PostgresRepositorySelector {
    constructor(){}
    public async getRepository(){
        const repository = new PostgresUserRepository();
        return repository;
    }
}