import Style from "./Style/AProfile.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import profile from "./Image/profile.jpg";
import email from "./Image/email.png";
import phone from "./Image/phone.png";
import nid from "./Image/nid.png";
import address from "./Image/address.gif";
import axiosConfig from './axiosConfig';
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

export default function AProfile(){
  const [user, setUser] = useState([]);
  const [Aname, setName] = useState([]);
  const [Aemail, setEmail] = useState([]);
  const [Aphone, setPhone] = useState([]);
  const [Anid, setNid] = useState([]);
  const [Password, setPassword] = useState([]);
  const [Aaddress, setAddress] = useState([]);
  const [id, setID] = useState(0);
  const navigate = useNavigate('');
  useEffect(()=>{

    if (localStorage.getItem('user')){
     let obj = JSON.parse(localStorage.getItem('user'));
     console.log(obj.userId);
     axiosConfig.get(`user/${obj.userId}`)
     .then(resp=>{
       setUser(resp.data);
       setName(resp.data.name);
       setEmail(resp.data.email);
       setPhone(resp.data.phone)
       setNid(resp.data.nid);
       setAddress(resp.data.address);
       setPassword(resp.data.password);
       setID(resp.data.id);
      }).catch(err=>{
       console.log(err);
      }
     );

 }else{
     alert("You are not logged in. Login or registration first");
     navigate('/login');
 }

 },[]);

 const onSubmitted= (e) =>{
  e.preventDefault();
  var obj = { id:id,name:Aname, email: Aemail, phone: Aphone, nid: Anid, address: Aaddress, password: Password};
  axios.post("http://127.0.0.1:8000/api/update",obj)
  .then(resp=>{
      var token = resp.data;
      alert(token);
     
  }).catch(err=>{
      console.log(err);
  });
}
    return(
    <>
 <Nav />
     <div className={Style.body}>
          <div className={Style.details}>
        <img className={Style.img}  src={profile}alt="" /><br/>
        <span  className={Style.name}>{user.name}</span>
      
       <hr/>
       <span className={Style.info}> <img className={Style.icon} src={email} /> {user.email}</span>
       <hr/>
       <span  className={Style.info}><img className={Style.icon} src={phone} />  {user.phone}</span>
       <hr />
       <span  className={Style.info}><img className={Style.icon} src={nid} /> {user.nid}</span>
       <hr />
       <span  className={Style.info}><img className={Style.icon} src={address} />{user.address}</span>
      </div>
   
      <div className={Style.main}>
       <h2 className={Style.title}>EDIT PROFILE</h2>
   
       <Form>
       <Form.Group className="mb-3" controlId="formBasicName">
       <Form.Control type="text" value={Aname} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>EMAIL ADDRESS</Form.Label>
        <Form.Control type="email" value={Aemail} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Name" />
  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>PHONE</Form.Label>
        <Form.Control type="phone" value={Aphone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNid">
        <Form.Label>NID</Form.Label>
        <Form.Control type="nid" value={Anid} onChange={(e)=>setNid(e.target.value)} placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>ADDRESS</Form.Label>
        <Form.Control type="text" value={Aaddress} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
      </Form.Group>
      <input type='hidden' value={id} onChange={(e)=>setID(e.target.value)} />
      <Button variant="primary" onClick={onSubmitted} type="submit">EDIT</Button>
     </Form>
      </div>
     </div>
    </>
        
    );
}