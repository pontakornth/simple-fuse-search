import React from 'react';
import { Book } from '../utils/books';

interface BookDetailProps {
    book: Book;
}

const BookDetail = ({ book }: BookDetailProps) => {
    return (
        <div className="book-detail">
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>{book.description}</p> 
        </div>
    )
}

export default BookDetail;