import './App.css';
import CustomerList from './components/CustomerList'
import Navbar from './components/Navbar';
import TrainingList from './components/TrainingList';
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={CustomerList} />
          <Route  path="/trainings" component={TrainingList} />
          
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
