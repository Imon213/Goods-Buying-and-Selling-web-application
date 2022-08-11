import p1 from "../img/logo2.jpg";
import style from "./css/NavberD.module.css"
import Home from "../comp/pages/Home"
import { Link } from 'react-router-dom';

const NavberD = () => {
    return(
        <>
        <section className={style.header}>
        <nav className={style.navb}>
            <div className={style.logo}>
            <img className={style.img} src={p1}/>
            </div>
            <div className={style.menu}>
                <ul className={style.ul}>
                    <li>
                    
                        <a href="/deliveryman_home" >Home</a>
                    </li>
                    <li>
                        <a href="/order_request">Order Request</a>
                    </li>
                    <li>
                        <a href="/confirm_order">Order History</a>
                    </li>
                    <li>
                        <a href="/delivered">Deliverd History</a>
                    </li>
                    <li>
                        <a href="/login">Logout</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
        </section>
       
         
        </>
    );
};

export default NavberD;