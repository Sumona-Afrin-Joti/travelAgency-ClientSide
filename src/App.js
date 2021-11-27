import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/Context/AuthProvider';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyBookings from './Components/MyBookings/MyBookings';
import ManageBookings from './Components/ManageBookings/ManageBookings';
import AddPlace from './Components/AddPlace/AddPlace';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>

            <PrivateRoute path="/manageBookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>

            <PrivateRoute path="/placeDetails/:id">
              <PlaceDetails></PlaceDetails>
            </PrivateRoute>

            <PrivateRoute path="/addPlace" >
              <AddPlace></AddPlace>
            </PrivateRoute>

            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>

            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>


            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
