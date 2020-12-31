export interface Book {
    title: string;
    author: string;
    description: string;
}

const books: Book[] = [
    {
        title: "All Might's journey",
        author: "All Might's fan",
        description: "This is a book describing All Might's journey to become the Symbol of Peace"
    },
    {
        title: "Easy Education Theory",
        author: "King Crimson ",
        description: "Easy book to read when you need to teach someone."
    },
    {
        title: "TypeScript For All",
        author: "Katsuki not Bakugou",
        description: "TypeScript book for dummy but it's has strong language."
    }
]

export default books;