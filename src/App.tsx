import { useState, ChangeEvent } from "react";
import Container from "./components/Container";
import Input from "./components/Input";
import Fuse from 'fuse.js';
import books from './utils/books';
import BookDetail from "./components/BookDetail";

const bookFuse = new Fuse(books, {
  keys: ['author', 'title']
})

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }


  return (
    <div className="App">
      <Container>
        <Input value={searchTerm} onChange={handleChange} />
        { bookFuse.search(searchTerm).map(x => x.item).map(book => (
          <BookDetail book={book} />
        )) }
      </Container>
    </div>
  );
}

export default App;
