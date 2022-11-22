import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import Lang from "./pages/Lang";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">mi perfil</Link>
            </li>
            <li>
              <Link to="/lenguaje-tecnico">lenguaje tecnico</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lenguaje-tecnico" element={<Lang />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
