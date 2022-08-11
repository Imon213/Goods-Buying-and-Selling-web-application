
import NavberD from '../NavberD';
import FooterD from '../FooterD';
import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const DeHistory = () => {
     const [item, setItem] = useState([]);
     const navigate = useNavigate('');

    useEffect(()=>{

        
         let obj = JSON.parse(localStorage.getItem('user'));
         console.log(obj.userId);
         axios.get(`http://127.0.0.1:8000/api/delivered_history/${obj.userId}`)
         .then(resp=>{
            console.log(resp.data);
           setItem(resp.data);
          }).catch(err=>{
           console.log(err);
          }
         );
    
    
    
     },[]);

    return(
        <>
        <NavberD />
           <div className="container">
                <Table>
                    <thead>
                        <tr>
                            <th>DELIVERY ID</th>
                            <th> PRICE</th>
                            <th> STATUS</th>
                            <th>ORDER PLACED AT</th>
                            <th>DELIVERED AT</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       {
                        item.map(p=>(
                            <tr>
                            <td>{p.id}</td>
                            <td>{p.price}</td>
                            <td>{p.status}</td>
                            <td>{p.created_at}</td>
                            <td>{p.updated_at}</td>
                            
                        </tr>
                        ))
                       }
                    </tbody>
                   
                </Table>
           </div>  
           <FooterD />     

        </>
    );
}

export default DeHistory;