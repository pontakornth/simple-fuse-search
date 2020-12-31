import { useState, ChangeEvent } from "react";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <Container>
        <Input value={searchTerm} onChange={handleChange}></Input>
        { searchTerm }
      </Container>
    </div>
  );
}

export default App;
