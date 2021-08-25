import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import RabbitMQOrderSystem from './Component/RabbitMQOrderSystem';
import HomeComponent from './Component/HomeComponent';

;

function App() {
  
  return (
    <div className="App">

    <div>  
<nav class="navbar navbar-expand-sm navbar-dark">
    <ul class="navbar-nav">
       <h1 className="nav-item">
        Order System
        </h1>
    </ul>
    </nav>
</div>



<div className="route">
  
  <Router>
  <Switch>
       
  <Route path="/" exact strict render={
         ()=>{
          return <h1 className="order"> <Link id="a" to ="/order" activeStyle={{ color:'red' }} exact >
            Order Now</Link></h1>
         }
        }></Route>
        
      
     
       <Route path="/order" exact strict component={RabbitMQOrderSystem} >
          
          </Route> 

          <Route path="/orderstatus/" exact strict component={HomeComponent} >
          
          </Route> 

      </Switch>
  </Router>
 
  </div>
  
 <footer class="footer ">
     
     <span>all rights reserved 2021 @GIGATORB</span>
     <br></br>
     <span>Contect us on gigatorb</span> 
    </footer>
   
 </div>   
  
  );
}

export default App;
