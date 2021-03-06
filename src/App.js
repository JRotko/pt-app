import './App.css';
import CustomerList from './components/CustomerList'
import Navbar from './components/Navbar';
import TrainingList from './components/TrainingList';
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import Calendar from './components/Calendar';
import Chart from './components/Chart'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={CustomerList} />
          <Route path="/trainings" component={TrainingList} />
          <Route path ="/calendar" component={Calendar} />
          <Route path ="/chart" component={Chart} />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
