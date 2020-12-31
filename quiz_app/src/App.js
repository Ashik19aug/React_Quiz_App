import React from "react";
import "./App.css";
import NavBar from "./components/MenuAppBar";
import Home from "./pages/Home/Home";
import Basic from "./pages/Basic/Basic";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Authenticate/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Quiz from "./pages/Quiz/Quiz";
import AuthProvider from "./contexts/AuthContext"
import {ViewProvider} from './contexts/ViewContext';
import ProfileDialog from './components/ProfileDialog';

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();

  return (
    <ViewProvider>
    <AuthProvider>
    <div className="App">
    <ProfileDialog />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact from="/" render={(props) => <Home {...props} />} />
          <Route exact path="/basic" render={(props) => <Basic {...props} />} />
          <Route exact path="/quiz" render={(props) => <Quiz {...props} />} />
          <Route exact path="/admin" render={(props) => <Admin {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
    </AuthProvider>
    </ViewProvider>
  );
}
