import React from 'react';
// import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import store from './store'
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

//Componentes
import Navegacion from './components/Navegacion';
import Home from './components/Home'
import Blog from './components/Blog'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    // <Provider store={store}>
      <div>
      {/* <Home/> */}
      <Router>
      <Navegacion/>
      <Route exact path="/" render={() => {
          return <Home/>
        }}>
        </Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
      </div>
  // </Provider>
  );
}

export default App;

