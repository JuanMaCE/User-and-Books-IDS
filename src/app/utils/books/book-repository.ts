import Book from "./book";

export default interface BookRepository {
    save(book: Book): Promise<void>;

    search(title: string): Promise<Book | undefined>;
}