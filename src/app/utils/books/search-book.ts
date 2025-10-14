import BookRepository from "./book-repository";

export default class SearchBook {
    private readonly repository: BookRepository;

    constructor(repository: BookRepository) {
        this.repository = repository;
    }

    public async run(title: string) {
        await this.repository.search(title);
    }
}