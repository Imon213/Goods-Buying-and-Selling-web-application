import Style from "../css/Review.module.css";
import p1 from "../../img/p1.jpg";
import p2 from "../../img/p2.jpg";
import p3 from "../../img/p3.jpg";
import p4 from "../../img/p4.jpg";
import p5 from "../../img/p5.jpg";
import p6 from "../../img/p6.png";
import { FaStar } from "react-icons/fa";
import NavberD from "../NavberD";


const Review = () => {
    return (<>
    <NavberD />
    <section className={Style.review}>
        <div className={Style.reviewh}>
            <span>Comments</span>
            <h2>Clients Says</h2>
        </div>

        <div className={Style.comment}>
            <div className={Style.comment_box}>
                <div className={Style.box_top}>

                    <div className={Style.profile}>
                        <div className={Style.profile_img}>
                        <img className={Style.img} src={p1}/>
                        </div>
                        <div className={Style.name}>
                            <strong>Alinna Ijaz</strong>
                            <span>@alinnaijaz</span>
                        </div>
                    </div>
                    <p>One of my favourite websites is Shopping.com. 
                        It’s great because you can give the good quality products. 
                        Carry on. I hope you will achieve your success.</p>
                    <div class={Style.reviex_star}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </div>

        <div className={Style.comment}>
            <div className={Style.comment_box}>
                <div className={Style.box_top}>

                    <div className={Style.profile}>
                        <div className={Style.profile_img}>
                        <img className={Style.img} src={p2}/>
                        </div>
                        <div className={Style.name}>
                            <strong>Maria Islam</strong>
                            <span>@mariaislam</span>
                        </div>
                    </div>
                    <p>This website is one of the best website I ever see. 
                        Best qualities product in there have.</p>
                    <div class={Style.reviex_star}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </div>
        
        <div className={Style.comment}>
            <div className={Style.comment_box}>
                <div className={Style.box_top}>

                    <div className={Style.profile}>
                        <div className={Style.profile_img}>
                        <img className={Style.img} src={p4}/>
                        </div>
                        <div className={Style.name}>
                            <strong>Trevor Aiden</strong>
                            <span>@trevoraiden</span>
                        </div>
                    </div>
                    <p>Its a great app for finding almost everything . But there are some issues i faced in 2022 . 
                        1) Prices are becoming higher but the quality of some product is not very appealing. 
                        2) Please make delivery charges little low. Around 60 or 70. 
                        3) Most of the time I got things which are not according to our expectation or poor quality.</p>
                    <div class={Style.reviex_star}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </div>

        <div className={Style.comment}>
            <div className={Style.comment_box}>
                <div className={Style.box_top}>

                    <div className={Style.profile}>
                        <div className={Style.profile_img}>
                        <img className={Style.img} src={p3}/>
                        </div>
                        <div className={Style.name}>
                            <strong>Mariya Ise</strong>
                            <span>@mariyaise</span>
                        </div>
                    </div>
                    <p>It's good but recently, I found out that it shows free shipping when it is not. 
                        This problem was not before butthere is this problem now.</p>
                    <div class={Style.reviex_star}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </div>

        <div className={Style.comment}>
            <div className={Style.comment_box}>
                <div className={Style.box_top}>

                    <div className={Style.profile}>
                        <div className={Style.profile_img}>
                        <img className={Style.img} src={p6}/>
                        </div>
                        <div className={Style.name}>
                            <strong>Darren Taylor</strong>
                            <span>@darrentaylor</span>
                        </div>
                    </div>
                    <p>I've had no serious issues with the platform as I was refunded for an item that categorically wasn't as described. 
                        My grievance is the excessive notifications based on my browsing habits. 
                        I'll let you know if I'm interested, thank you very much. 
                        Even though my notifications are set ONLY for orders, this appears to include promotions based on browsing. 
                        Why not distinguish between the two so 
                        I am not bombarded with unnecessary notifications and only those pertaining to what I actually bought?</p>
                    <div class={Style.reviex_star}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </div>

        <div className={Style.comment}>
            <div className={Style.comment_box}>
                <div className={Style.box_top}>

                    <div className={Style.profile}>
                        <div className={Style.profile_img}>
                        <img className={Style.img} src={p5}/>
                        </div>
                        <div className={Style.name}>
                            <strong>Oliver Heard</strong>
                            <span>@oliverheard</span>
                        </div>
                    </div>
                    <p>The only real problem is the frequent ads for sexually explicit products and 
                        inappropriate language used as placeholder text in the search box. 
                        There are things you can buy here you can't get anywhere else, 
                        that said there's also a lot of dodgy looking products. 
                        Most (if not all) products will ship from China which means delivery takes longer but overall good.</p>
                    <div class={Style.reviex_star}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </div>
        
    </section>
        </>
    );
};

export default Review;