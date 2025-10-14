export default class Book {
    public title: string;
    public author: string;
    public content: string;

    constructor(
        title: string,
        author: string,
        content: string
    ) {
        this.title = title,
        this.author = author,
        this.content = content
    }

    public static create(params: {
        title: string,
        author: string,
        content: string
    }): Book {
    return new Book(
        params.title,
        params.author,
        params.content
    );
    }
    
}