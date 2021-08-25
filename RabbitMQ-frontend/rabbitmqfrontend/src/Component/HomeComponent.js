import React, { Component } from 'react';
import Orderservice from '../Services/Orderservice';
import RabbitMQOrderSystem from './RabbitMQOrderSystem';

class HomeComponent extends Component {
 constructor(props){
     super(props)
     this.state={
        name:""

     }
     
 }
     render() {

      let response1=sessionStorage.getItem('message')
     let response= sessionStorage.getItem('data');
     let res = JSON.parse(response)
     
     console.log(response1);
      


        return (
            <div className="details" >
 <h1>Order Status </h1>
  <br></br> 
  <hr></hr> 
<table class="table table-striped">
<thead>
      <tr>
        <th scope="col"><h2> Order ID   :</h2>{}</th>
        <th scope="col"><h2>{res.orderId}</h2></th>
      </tr>
    </thead>
   
    <thead>
      <tr>
        <th scope="col"><h2> Name    :</h2>{}</th>
        <th scope="col"><h2>{res.name}</h2></th>
      </tr>
    </thead>
    <thead>
        <tr>
          <th scope="col"><h2>Quantity    :</h2></th>
          <th scope="col"><h2>{res.qty}</h2></th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th scope="col"><h2>price    :</h2></th>
          <th scope="col"><h2>{res.price}</h2></th>
        </tr>
      </thead>
            <thead>
        <tr >
          <th scope="col" colSpan="2">< h2>order status</h2></th>
          
        </tr>
       </thead>


      <thead>
        <tr>
          <th scope="col" colSpan="2">< h1>{response1}</h1></th>
          
        </tr>
      </thead>
    
    
  </table>
            </div>
        );
    }
}

export default HomeComponent;