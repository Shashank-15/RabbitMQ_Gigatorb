import React, { useState } from 'react';
import axios from 'axios';


function RabbitMQOrderSystem(){
    const url="http://localhost:8080/order/Gigatorb_queue1"
    
    const[data, setData] =useState(
        {
            name:"",
            qty:"",
            price:"",
            

            
        })

        const [resData, setResData]=useState({
            name:'',
            orderId:'',
            price:'',
            qty:'',
            message:''
            
           
        });
    
    

let response;
let response1;

        function submit(e){
            e.preventDefault();
            axios.post(url,{
                name:data.name,
                qty:data.qty,
                price:data.price
            })

            
            .then(res=>{
                response =res.data.order;
                    response1=res.data.message;
                    
                setData(response);
                setResData(response);
               console.log(response);
               sessionStorage.setItem('data',JSON.stringify(response));
               
                sessionStorage.setItem('message',response1);
               document.location.href="/orderstatus/";
            
                
          })

        }

     function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
       console.log(newdata)
       

    }

    return (
    
    <div>
            <form onSubmit={(e)=> submit(e)} >
               <div className="container">
                   
                   <div className="header">
                    
                   <marquee width="40%" direction="left" height="30%">
                   <h1> Order Here</h1>
                    </marquee>
                  
                   </div>

        <div className="table">
        <table class="table table-striped">
            <tbody>
                <tr>
                   <td>
                         <h3>Name</h3>   
                        
                    </td>

                    <td > 
                          <input  onChange={(e)=>handle(e)} id="name" value={data.name} placeholder=" Enter Hear Name" type="text"  required  ></input>
                     </td>
                </tr>
               
               
                <tr>
                <td>
                    <h3>        Quantity
                    </h3> 
                    </td>

                     <td>
                        <input  onChange={(e)=>handle(e)} id="qty" value={data.qty} placeholder=" Enter Hear Quantity" type="text" required></input>
                     </td>
                </tr>
                
                
                 <tr>
                 <td>
                     <h3>
                            Price
                     </h3> 
                    </td>
                   
                    <td>
                        <input  onChange={(e)=>handle(e)} id="price" value={data.price} placeholder="Enter Hear Price" type="text" required></input>
                    
                     </td>
                     
                   </tr>
                         
                 <tr>
                     <td  colSpan="2">

                     <button onClick={submit} class="sendbtn">SEND</button>

                     </td>
                    
                 </tr>
                
                   
                 
                 </tbody>
            </table>
            <div>
            <h2>   {resData.name}  {resData.qty}  {resData.price}</h2><h2 id="result-text"> {resData.message} </h2>
            </div>

        </div>
                                           
                </div>   
    
            </form>
            
</div>


    );
}
export default RabbitMQOrderSystem;
