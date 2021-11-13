import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Users from "./Users";
import Users2 from "./User2";
import Users1 from "./User1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Router>
          <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/users">Users</Link>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Home data={"Hola"} element={"Home component element"} />
              }
            />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />}>
              <Route path="user1" element={<Users1 />} />
              <Route path="user2" element={<Users2 />} />
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
