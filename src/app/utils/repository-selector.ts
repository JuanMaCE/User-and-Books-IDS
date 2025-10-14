import UserRepository from "./user-repository";

export default interface RepositorySelector {
    getRepository(): Promise<UserRepository>;
}
