import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
