import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Intervals from './components/Intervals';
import IntervalsBeginner from './components/IntervalsBeginner';
import IntervalsIntermediate from './components/IntervalsIntermediate';
import IntervalTrainer from './components/IntervalTrainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Route exact path="/">
          <h1>Welcome!</h1>
        </Route>
        <Route exact path="/intervals">
          <Intervals />
        </Route>
        <Route exact path="/intervals/beginner">
          <IntervalTrainer difficulty={"beginner"} />
        </Route>
        <Route exact path="/intervals/intermediate">
          <IntervalTrainer difficulty={"intermediate"} />
        </Route>
        <Route exact path="/intervals/advanced">
          <IntervalTrainer difficulty={"advanced"} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
