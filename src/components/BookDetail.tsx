import React from 'react';
import { useFela } from 'react-fela';
import { Book } from '../utils/books';

interface BookDetailProps {
    book: Book;
}

const bookDetailStyle = () => ({
    padding: "1rem",
    border: "1px solid dodgerblue",
    marginTop: "1rem"
})

const BookDetail = ({ book }: BookDetailProps) => {
    const { css } = useFela();
    return (
        <div className={css(bookDetailStyle)}>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>{book.description}</p> 
        </div>
    )
}

export default BookDetail;