import  "../css/Contact.module.css"
import NavberD from "../NavberD";
import { FaMap, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";
import FooterD from "../FooterD";
const Contact = () => {
    return(
        
        <>
            <NavberD />

           <section className="contact" >
            <div className="detils"
            >
                    <span>Get In Touch</span>
                 <h2>Visit our agency locations or contact us</h2>
                    <h3>Head Office</h3>
                <div>
                    <li>
                    <div className="i">
                        <FaMap />
                        </div>
                        <p>Dhaka-1212 Bangladesh</p>
                    </li>
                    <li>
                        <div className="i">
                        <FaEnvelope />
                        </div>
                        <p>contact@gmail.com</p>
                    </li>
                    <li>
                    <div className="i">
                        <FaPhoneAlt />
                        </div>
                         <p>+880 19********</p>
                    </li>
                    <li>
                    <div className="i">
                        <FaClock />
                        </div>
                        <p>Saturday to Wednesday: 9.00am to 10.00pm</p>
                    </li>
                </div>
               

                <section className="formdes">
                    <form action="">
                            <span>Leave a Message</span>
                            <h2>We hear from you</h2>
                            <input type="text" placeholder="Your name" />
                            <input type="text" placeholder="Your email" />
                            <input type="text" placeholder="Your subject" />
                            <textarea name="" id="" cols="30" rows="10"placeholder="Your message" ></textarea>
                            <button>Submit</button>
                        </form>
                    </section>
            </div>
           
            </section>
            <FooterD />

        </>
    );
}

export default Contact;