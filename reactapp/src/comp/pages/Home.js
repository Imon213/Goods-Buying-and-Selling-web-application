import Navb from "../../comp/NavberD";
import FooterD from "../FooterD";
import Style from "../css/Home.module.css";
const Home = () => {
    return(
        <>
        <Navb />
        <div>
            <section className={Style.body}>
                <h2>Super deals</h2>
                <h1>On all delivery</h1>
                < p>Save more with coupons & discount </p>
                <button >More</button>
            </section>
        </div>

        <FooterD />
        </>
    );
}

export default Home;