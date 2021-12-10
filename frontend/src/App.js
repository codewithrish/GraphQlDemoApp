import "./App.css";
import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import AuthPage from "./pages/Auth";
import EventsPage from "./pages/Events";
import BookingsPage from "./pages/Bookings";
import MainNavigation from "./components/Navigation/MainNavigation";
import AuthContext from "./context/auth-context";

class App extends Component {
  state = {
    token: null,
    userId: null,
  };
  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };
  logout = () => {
    this.setState({ token: null, userId: null });
  };
  render() {
    return (
      <Router>
        <Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout,
            }}
          >
            <MainNavigation />
            <main className="main-content">
              <Routes>
                {this.state.token && (
                  <Route
                    exact
                    path="/"
                    element={<Navigate replace to="/events" />}
                  />
                )}
                {this.state.token && (
                  <Route
                    exact
                    path="/auth"
                    element={<Navigate replace to="/events" />}
                  />
                )}
                {!this.state.token && (
                  <Route exact path="/auth" element={<AuthPage />} />
                )}
                <Route exact path="/events" element={<EventsPage />} />
                {this.state.token && (
                  <Route exact path="/bookings" element={<BookingsPage />} />
                )}
                {!this.state.token && (
                  <Route path="/*" element={<Navigate replace to="/auth" />} />
                )}
              </Routes>
            </main>
          </AuthContext.Provider>
        </Fragment>
      </Router>
    );
  }
}

export default App;
