import React from 'react';
import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom';
import Showmovies from './containers/Showmovies';
import AdminDashboard from './containers/AdminDashboard';
import FavList from './containers/FavList';
import watchlist from './containers/watchlist';
import MovieDetails from './containers/MovieDetails';
import DeletePersons from './containers/deleteperson';
import Actorlist from './containers/Actorlist';
import Signin from './containers/Signin';
import SignUp from './containers/Signup';
import AddActors from './containers/AddActors';
import AddActress from './containers/AddActress';
import Addmovie from './containers/Addmovie';
import AddDirector from './containers/AddDirector';
import AddProducer from './containers/AddProducer';
import NavBar from './containers/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./popup.css"
class  App extends React.Component {
render(){  return (
   
      <div>
        
      <Router>
      <NavBar/>
        <br/>
        <br/>
        <br/>
        <br/>
        
         <Switch>
        <Route exact path="/admin" component={AdminDashboard} />
        <Route exact path="/" component={Showmovies} />
          <Route exact path="/favlist" component={FavList} />
          <Route exact path="/watchlist" component={watchlist} />
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Route exact path="/seedetails"  >
                <MovieDetails />
              </Route>
              <Route exact path='/delete' component={DeletePersons} />
              <Route exact path='/actorlist' component={Actorlist} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/addmovie" component={Addmovie} />
              <Route exact path="/actor" component={AddActors} />
              <Route exact path="/actress" component={AddActress} />
              <Route exact path="/director" component={AddDirector} />
              <Route exact path="/producer" component={AddProducer} />
            </div>
          </div>
        </Switch>
      </Router>
      </div>
  );
}
}

export default App;
