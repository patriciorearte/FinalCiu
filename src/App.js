
import './css/App.css';
import NavBar from './componentes/NavBar';
import WeatherPanel from './componentes/WeatherPanel';
import Footer from './componentes/Footer';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <WeatherPanel></WeatherPanel>
      <Footer></Footer>
    </div>
  );
}

export default App;
