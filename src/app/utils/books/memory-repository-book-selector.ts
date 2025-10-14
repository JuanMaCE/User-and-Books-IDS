import InMemoryBookRepository from "./in-memory-book-repository";

export default class MemoryRepositoryBookSelector {
    public async getRepository(){
        const repository = new InMemoryBookRepository();
        return repository;
    }
}