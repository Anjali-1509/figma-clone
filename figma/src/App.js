import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
