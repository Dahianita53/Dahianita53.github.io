import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/lenguaje tecnico">lenguaje tecnico</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />}/>
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
