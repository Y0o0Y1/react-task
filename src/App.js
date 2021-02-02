import './App.css';
import Header from "./components/Header/Header"
import Services from "./components/Services"
import { BrowserRouter as Router , Switch,Route} from "react-router-dom"
import ItemDescription from "./components/Item-Description/ItemDescription"
import Footer from "./components/Footer/Footer"
import Features from "./components/Features/Features"


function App() {
  return (
    <div className="App">
    <div className="container">
      <Router>
        <Header/>
          <h3>GALLERY</h3>
          <Switch>
              <Route path="/" exact component={Services}/>
              <Route path="/:id" exact component={ItemDescription}/>
            </Switch>  
      </Router>
      <Features/>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
