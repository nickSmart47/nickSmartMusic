import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import IntervalTrainer from './components/IntervalTrainer';
import IntervalsBeginner from './components/IntervalsBeginner';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Route exact path="/">
          <h1>Welcome!</h1>
        </Route>
        <Route exact path="/intervals">
          <IntervalTrainer />
        </Route>
        <Route exact path="/intervals/beginner">
          <IntervalsBeginner />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;