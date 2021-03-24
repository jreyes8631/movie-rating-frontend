
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import MoviesIndexContainer from './containers/MoviesIndexContainer';
import MovieFormContainer from './containers/MovieFormContainer';
import ReviewIndexContainer from "./containers/ReviewIndexContainer";
import NewReviewContainer from "./containers/NewReviewContainer";
import MovieShowContainer from "./containers/MovieShowContainer";





function App() {
  return (
    <div className="App">
      
      <Router>
        <nav className="text-center bg-blue-500 text-yellow-100 p-4">
        <NavLink 
          className="inline-block p-2" to="/"
          activeClassName="text-yellow-300"
          exact
        >
          Movies
        </NavLink>

        <NavLink 
          className="inline-block p-2" to="/movies/new"
          activeClassName="text-yellow-300"
        >
          New Movie
        </NavLink>

        <NavLink 
          className="inline-block p-2" to="/reviews"
          activeClassName="text-yellow-300"
          exact
        >
          Reviews
        </NavLink>

          


      </nav>
        <Switch>

          <Route 
          exact path="/" 
          component={MoviesIndexContainer}/> 
          
          <Route 
          path="/movies/new" 
          component={MovieFormContainer}/>

          <Route 
          path="/movies/:movie_id/reviews/new" 
          component={NewReviewContainer}/>

          <Route 
          path="/movies/:id" 
          component={MovieShowContainer}/>

         <Route 
          exact 
          path='/reviews' 
          component={ReviewIndexContainer}/>
          
        
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
