import { useState, ChangeEvent } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <input className="search-input" value={searchTerm} onChange={handleChange} />
      { searchTerm }
    </div>
  );
}

export default App;
