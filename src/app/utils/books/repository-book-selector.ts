import BookRepository from "./book-repository";

export default interface RepositoryBookSelector {
    getRepository(): Promise<BookRepository>;
}