import Header from './Components/Header/Header';
import './App.css';
import TinderCards from './Components/TinderCards/TinderCards';
import SwipeButtons from './Components/SwipeButton/SwipeButtons';

function App() {
  return (
    <div className="App">
     <Header/>
     <TinderCards/>
     <SwipeButtons/>
    </div>
  );
}

export default App;
