import React from "react";
import "./App.css";
import { Form, Detail, Landing, Home } from "./views/index.js";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar.jsx";

function App() {
  const location = useLocation();

  const eventInput = (setPaging) => {
    let fnResetPages = () => {
      setPaging((p) => (p = 0));
    };
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar /> &&
        location.pathname !== "/form" && <NavBar />}

      <Route exact path="/">
        <Landing />
      </Route>

      <Route exact path="/home">
        <Home inputEvent={eventInput} />
      </Route>

      <Route
        path="/detail/:id"
        render={({ match }) => <Detail id={match.params.id} />}
      />

      <Route exact path="/form">
        <Form />
      </Route>
    </div>
  );
}

export default App;
