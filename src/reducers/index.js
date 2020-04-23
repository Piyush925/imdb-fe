import { combineReducers } from 'redux';
import Showmovies from './Showmovies';
import signupreducer from './Signupreducer';
import signinreducer from './Loginreducer'
import addmovies from './Addmoviereducer'
import addactor from './AddActor'
import addactress from './AddActress'
import addproducer from './AddProducer'
import adddirector from './AddDirector'
import movies from './MovieDetails'
import favlist from './Favlist'
import watchlist from './watchlist'
import actorlist from './Actorlist'
import deletepersons from './deletepersons'

export default combineReducers({
   Showmovies,
   signupreducer,
   signinreducer,
   addmovies,
   addactor,
   addactress,
   addproducer,
   adddirector,
   movies,
   favlist,
   watchlist,
   actorlist,
   deletepersons
})