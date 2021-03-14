
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MoviesIndexContainer from './containers/MoviesIndexContainer';
import MoviesFormContainer from './containers/MovieFormContainer';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"> Movies</Route>
          <Route path="/movies/new"> New Movie</Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
