import Button from 'react-bootstrap/Button';
import Delete from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import NavberD from './NavberD';
import FooterD from './FooterD';
const ConfirmOrder = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
      let obj = JSON.parse(localStorage.getItem('user'));
         let item = {d_id: obj.userId, }
        //if (localStorage.getItem('user')){
         axios.get(`http://127.0.0.1:8000/api/on_the_way`)
         .then(resp=>{
          console.log(resp.data);
           setUser(resp.data);
          }).catch(err=>{
           console.log(err);
          }
         );
    
     },[]);

  const acceptUser=(i)=>{
    let obj = JSON.parse(localStorage.getItem('user'));
    let item = {p_id : i, u_id: obj.userId, status:'delivered'}
    axios.post(`http://127.0.0.1:8000/api/delivered`, item)
    .then(resp=>{
     alert(resp.data);
     }).catch(err=>{
      console.log(err);
     }
    );
  }

    return(
        <>
        <NavberD />
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>ORDERD PRICE</th>
            <th>ORDERED STATUS</th>
            <th>PLACED AT</th>
            <th colSpan='2'>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map(p=>(
              <tr>
            <td>{p.id}</td>
            <td>{p.Price}</td>
            <td>{p.status}</td>
            <td>{p.created_at}</td>
            <td> <Link to={`/user_request${p.u_id}`}>CUSTOMER INFORMATION</Link> </td>
           
            <td> <td><Button onClick={()=>acceptUser(p.id)}>DELIVERED</Button></td></td>
            
          </tr>
            ))
          }
      
        </tbody>
      </Table>  
           <FooterD /> 

        </>
    );
}

export default ConfirmOrder ;