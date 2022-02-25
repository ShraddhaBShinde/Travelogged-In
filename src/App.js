import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Route} from "react-router-dom"
import HomePage from './Components/HomePage';

function App() {
  return (
    <>
    <Route>
      <HomePage />
    </Route>
    </>
  );
}

export default App;
