import logo from './logo.svg';
import './App.css';



import RabbitMQOrderSystem from './Component/RabbitMQOrderSystem';

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
            <h1 class="nav-item"> 
            Add Order Message Hear</h1>
            
    </ul>
    </nav>
</div>
      <div>
          <RabbitMQOrderSystem/>
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
