import { promises as fs } from "fs";
import path from "path";
import Book from "./book";
import BookRepository from "./book-repository";

export default class InMemoryBookRepository implements BookRepository{
    public booksFilePath: string;

    constructor(){
        this.booksFilePath = path.join(process.cwd(), "src", "app", "utils", "books.txt");
    }

    public async save(book: Book){
        try {
            await fs.mkdir(path.dirname(this.booksFilePath), { recursive: true });
            let existing = "";

            try {
                existing = await fs.readFile(this.booksFilePath, "utf-8");
            } catch {
                existing = "";
            }

            const lines = existing.trim() ? existing.trim().split("\n") : [];
            const newNumber = lines.length + 1;

            const line = `${newNumber}. ${book.title.replace(/\s+/g, "")}, ${book.author.replace(/\s+/g, "")}, ${book.content}`;
            const newContent = existing ? `${existing}\n${line}` : line;

            await fs.writeFile(this.booksFilePath, newContent, "utf-8");

            console.log(`Book Save: ${book.title}`);
        } catch (error) {
            console.error("Error saving the book:", error);
        }
    }

    public async search(title: string){
        try {
            const data = await fs.readFile(this.booksFilePath, "utf-8");
            const lines = data.split("\n");

            for (const line of lines) {
                const match = line.match(/^\d+\.\s*(.+?),\s*(.+?),\s*(.+)$/);
                if (match) {
                    const [_, storedTitle, storedAuthor, storedContent] = match;

                    if (storedTitle.toLowerCase() === title.replace(/\s+/g, "").toLowerCase()) {
                        return Book.create({
                            title: storedTitle,
                            author: storedAuthor,
                            content: storedContent,
                        });
                    }
                }
            }
        } catch{
            throw new Error("Book not found");
        }
    }
}