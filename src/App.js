// import logo from './logo.svg';
import './App.css';
import WeatherWeek from './components/WeatherWeek';
import thunder from './components/img/thunder.png'

function App() {
  return (
    <div className="App">
      {/* <img src={thunder} alt=""/> */}
      {/* <h1>hello</h1> */}
      <WeatherWeek/>
      <img src={require('./components/img/thunder.png')} alt=""/>

    </div>
  );
}

//!   images nt in!  see WeatherWeek!

export default App;
