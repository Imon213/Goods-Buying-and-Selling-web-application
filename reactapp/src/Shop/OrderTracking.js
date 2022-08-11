import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import Detail from "./Detail";
import { useParams } from "react-router-dom";
import Delete from "./Delete";
import Head from "./Head";
import Style from "../Component/Style/product.module.css";

const OrderTracking = (props) => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate("");
  const { id } = useParams();

  const [value, setValue] = useState();

  useEffect(() => {
    // if (localStorage.getItem('user')){
    
     axios.get("http://127.0.0.1:8000/api/order_tracking")
      .then((resp) => {
        console.log(resp.data);
        setOrders(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // }else{
    //     alert(" please ,Login ");
    //     //navigate('/login');
    // }
  }, []);

  return (
    <>
      <Head />
      <div className={Style.main}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>

              <th>Price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((p) => (
              <tr>
                <td>{p.id}</td>

                <td>{p.Price}</td>
                <td>{p.status}</td>

                <td>
                  <Link to={`/detail_orderlist${p.id}`}>Details</Link>
                </td>
                {/* <td><Link to={axios.get(`http://127.0.0.1:8000/api/delete_product/${p.id}`)}>Delete</Link></td> */}
                {/* <td> <button onClick={axios.get(`http://127.0.0.1:8000/api/delete_product/${p.id}`)}>Delete</button></td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default OrderTracking;

/////   <Nav />
