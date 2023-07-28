import './App.css';
import InputShortener from './components/InputShortener';
import LinkResult from './components/LinkResult';
import BgAnimate from './components/BgAnimate';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <main className="container">
      <div className="glass">
      <InputShortener setInputValue={setInputValue}/>
      <LinkResult inputValue={inputValue} />
      </div>
      
      <BgAnimate />
      
    </main>
  );
}

export default App;
