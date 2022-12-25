import { ReactComponent as Logo } from './assets/bohuslind-logo-web.svg'
import './App.scss';
import ReactGA from 'react-ga';
ReactGA.initialize('G-8NWYR3FE0B');

function App() {
  return (
    <div id="page">
      <div id="logo">
        <Logo />
      </div>
      <span>EU VAT SE559359356801</span>
    </div>
  );
}

export default App;
