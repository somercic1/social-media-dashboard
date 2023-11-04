import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MainGridComponent from './components/MainGridComponent';
import SecondaryGridComponent from './components/SecondaryGridComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <MainGridComponent></MainGridComponent>
      <h1>Overview - Today</h1>
      <SecondaryGridComponent></SecondaryGridComponent>
    </div>
  );
}

export default App;
