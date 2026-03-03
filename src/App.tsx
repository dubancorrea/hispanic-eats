import './App.css';

import Board from './components/Board'; 

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Hispanic Eats 🌮</h1>
        {/* 2. Add the subtitle requirement from the project overview */}
        <h2>Authentic flavors from the heart of our community</h2>
      </header>
      
      {/* 3. Render the Board here */}
      <Board />
    </div>
  )
}
export default App;