import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './style/index.css'
import Commuters from './pages/authentication/commuter';
import Home from './pages/booking/book';
import RegisterCommuter from './pages/authentication/register';
import Payment from './pages/booking/payment';
import Receipt from './pages/booking/receipt';

function App() {
  
  return(
    <div className="App">

    <Router>
      <Switch>
        <Route exact path="/">
          <Commuters />
        </Route>
        <Route exact path="/book/:id">
          <Home />
        </Route>
        <Route exact path="/register">
          <RegisterCommuter />
        </Route>
        <Route exact path="/book/:id/payment/:id">
          <Payment />
        </Route>
        <Route exact path="/book/:id/payment/receipts/:id">
          <Receipt />
        </Route>
      </Switch>
    </Router>

    </div>
  )

}

export default App;
