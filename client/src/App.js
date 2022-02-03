import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import IntervalTrainer from './components/IntervalTrainer';
import IntervalsBeginner from './components/IntervalsBeginner';
import IntervalsIntermediate from './components/IntervalsIntermediate';
import IntervalsAdvanced from './components/IntervalsAdvanced';


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
        <Route exact path="/intervals/intermediate">
          <IntervalsIntermediate />
        </Route>
        <Route exact path="/intervals/advanced">
          <IntervalsAdvanced />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
