// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/order" component={Order} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
