import { useState, ChangeEvent } from "react";
import Container from "./components/Container";
import Input from "./components/Input";
import Fuse from 'fuse.js';
import books from './utils/books';
import BookDetail from "./components/BookDetail";
import { useFela } from "react-fela";

const bookFuse = new Fuse(books, {
  keys: ['author', 'title']
})

type column = "column";

const bookListStyle = () => ({
  display: "flex",
  flexDirection: "column" as column,

})

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { css }  = useFela();
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }


  return (
    <div className="App">
      <Container>
        <Input value={searchTerm} onChange={handleChange} />
        <div className={css(bookListStyle)}>
        { bookFuse.search(searchTerm).map(x => x.item).map(book => (
          <BookDetail book={book} />
        )) }
        </div>
      </Container>
    </div>
  );
}

export default App;
