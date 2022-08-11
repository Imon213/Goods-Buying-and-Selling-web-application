import style from "./css/Footer.module.css";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaEnvelope } from "react-icons/fa";
const FooterD = () => {
    return(
        <>
            <section className={style.sign}>
    <div className={style.text}>
        <h4>Sign Up</h4>
        <p>Update about our latest shop and special offers</p>
    </div>
    <div className={style.form}>
        <input type="text" placeholder="Your email address" />
        <button class="normal">Sign Up</button>
    </div>
</section>
<footer className={style.footer}>
    <div className="col">
        <h4>Contact</h4>
        <p><b>Address:</b> Middel Badda Dhaka,1212</p>
        <p><b>Phone:</b>+88019********</p>
        <div class="follow">
            <h4>Follow us</h4>
            <div class="icon">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaEnvelope />
                <FaTwitter />
            </div>
        </div>
        
        
    </div>

    <div className={style.col}>
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Privacy Pocicy</a>
        <a href="#">Terms & Condition</a>
        <a href="contact.html">Contact us</a>
    </div>

    <div className={style.col}>
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
    </div>

    

</footer>
<section className={style.copy}>
    <p> 2020, Ecommerce Website</p>
</section>

        </>
    );
}

export default FooterD;
