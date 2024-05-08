import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifcations from '../Notifications/Notifications';

function App() {
  return (
    <React.Fragment>
      <Notifcations />
      <div className="App">
        <Header />
        <hr />
        <Login />
        <hr />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;