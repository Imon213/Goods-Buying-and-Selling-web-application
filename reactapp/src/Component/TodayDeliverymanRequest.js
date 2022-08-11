import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TodaysDeliverymanRequest(){
    const [user, setUser] = useState([]);
    useEffect(()=>{
  
        //if (localStorage.getItem('user')){
         axios.get(`http://127.0.0.1:8000/api/today_delivery_man_request`)
         .then(resp=>{
          console.log(resp.data);
           setUser(resp.data);
          }).catch(err=>{
           console.log(err);
          }
         );
    
     },[]);

     const acceptUser=(i)=>{
        axios.get(`http://127.0.0.1:8000/api/request_accept/${i}`)
           .then(resp=>{
            alert(resp.data);
            }).catch(err=>{
             console.log(err);
            }
           );
       }
return(
    
    <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
          {
            user.map(p=>(
              <tr>
            <td>{p.name}</td>
            <td>{p.email}</td>
            <td>{p.phone}</td>
            <td>{p.address}</td>
            <td><Button onClick={()=>acceptUser(p.id)}>Accept</Button></td>
          
            
          </tr>
            ))
          }
        </tbody>
          </Table>
);
}