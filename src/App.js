import React from "react";
import './App.css';
import SimpleNavBar from './components/simpleNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/about';
import Features from "./pages/features";
import Footer from "./components/footer";
function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <>
      <div className="navigation">
        <Router>
          <SimpleNavBar />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/about' component={About} />
            <Route path="/features" component={Features} />
          </Switch>
        </Router>
        <Footer />
      </div> 
      
      </>
  );
}

export default App;
