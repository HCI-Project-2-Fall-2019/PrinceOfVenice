import React, { Component } from 'react';
import pic1 from "../images/about_us_images/0.jpg"
import pic2 from "../images/about_us_images/1.jpg"
import pic3 from "../images/about_us_images/2.jpg"
import pic4 from "../images/about_us_images/3.jpg"
import pic5 from "../images/about_us_images/4.jpg"
import pic6 from "../images/about_us_images/5.jpg"

class AboutUs extends Component {
    render() {
        return (  
            <div>
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: 10,
                    borderRadius: 10,
                    maxWidth: 950,
                    margin: "auto"
                }}>
                    <div>
                        <img src={pic1} style={{float: 'right', width: '310px', padding:5, borderRadius:10}}/>
                        <p style={{fontSize: 20, textAlign: 'left'}}>
                            While L.A.’s food truck movement is expansive, having grown beyond hipster cuisine, Prince Emanuele Filiberto took the opportunity to flavor it with regional recipes from his homeland. “After discovering the L.A. food trucks,” says Prince Emanuele, “I saw a need for high-quality Italian food [made] with fresh handmade pasta, and sauces. I also desired [to provide] a great customer experience.” One that was new, a purveyor preparing pasta with top-quality on the spot. “The idea was to have the best ingredients from Italy and Southern California, locally sourced organic vegetables, cage-free eggs, and free-range meats from California farms, paired with Italian flour, olive oils, and truffles.”
                        </p>
                    </div>
                    <div>
                        <img src={pic2} style={{float: 'left', width: '310px', padding:5, borderRadius:10}}/>
                        <p style={{fontSize: 20, textAlign: 'left'}}>
                            The menu, which is quite vast, changes seasonally to offer the freshest recipes representing the various regions of Italy, all prepared per patron. “We want the customer to discover the many different regions of Italy through our dishes,” states Prince Emanuele. Crowd favorites include Tartufo made with fresh black truffles and house-made truffle butter, and the refreshingly lite Spaghetti de Limone with lemon and spicy red pepper flakes for the perfect finish. Meat lovers get their comfort-food fill with the Maccheroni alla Bolognese, while vegetarians nosh on Conchiglie alla Norma made with farm-fresh eggplant, heirloom tomatoes, basil and shaved ricotta cheese. Staying true to the convenience of fast-casual food truck cuisine, these lightweight pastas cook in minutes.                        
                        </p>
                    </div>
                    <div>
                        <p style={{fontSize: 20, textAlign: 'left'}}>
                            The Prince of Venice food truck serves up healthy Italian fare daily around Los Angeles and its whereabouts is posted online. Prince Emanuele’s excitement about the food industry and his craft is contagious and he has set his mind on building the first Prince of Venice store by this September in Venice ( Los Angeles ).
                        </p>
                    </div>
                    <div>
                        <img src={pic3} style={{float: 'right', width: '310px', padding:5, borderRadius:10}}/>
                        <p style={{fontSize: 20, textAlign: 'left'}}>
                            The brick-and-mortar restaurant will offer a broader menu and include a visible pasta lab, delivery and food truck services. “My business partner, [Paolo Lasagna, longtime Italian catering services entrepreneur] and I desire for the Prince of Venice to become the brand associated with fresh handmade pasta and sauces here in the USA,” explains Prince Emanuele.
                        </p>
                        <p style={{fontSize: 20, textAlign: 'left'}}>
                            Like a loyal courtier, make the pilgrimage to the Prince of Venice food truck and be royally rewarded.
                        </p>
                        <p style={{fontSize: 20, textAlign: 'left'}}>
                            The Prince of Venice has united two distinctly different worlds in Los Angeles: royalty and the trendy food truck scene. A cult following of regulars has extended a warm welcome to this mobile delight (and actual Italian Prince of Piedmont and Venice, Emanuele Filiberto di Savoia, the grandson of King Umberto II, last reigning king of Italy) for its freshly-made Italian fare.                        
                        </p>
                    </div>
                    <div>
                        <h2> PRINCE OF VENICE PARTNERS </h2>
                    </div>
                    <div>
                        <img src={pic4} style={{float: 'left', padding:5, borderRadius:10}}/>
                        <p style={{fontSize: 20, textAlign: 'left'}}>
                            <strong>Emanuele Filiberto di Savoia</strong> is an entrepreneur, producer, writer, novelist and philanthropist. The grandson of Umberto II, the last reigning king of Italy, who was deposed in 1946, Emanuele Filiberto spent his first 30 years exiled in Switzerland until a change in Italian law allowed the would-be Crown Prince to visit Italy in 2002. A former international banker and hedge fund manager, Emanuele Filiberto segued into entertainment initially as a soccer commentator, then other roles as a television host and presenter. Winning Italy’s version of “Dancing with the Stars” in 2009, and becoming the only male contestant ever to win, and by an overwhelming margin, Emanuele Filiberto develops and produces television shows and international movies through his production company, AristoCrazy, and more recently launched his own luxury fashion brand, PrinceTees. Active in charity through his Prince of Venice Foundation and Emanuele Filiberto Charity Fund Foundation, Emanuele Filiberto is married to award-winning French actress Clotilde Courau.
                        </p>
                    </div>
                    <div>
                        <img src={pic5} style={{float: 'left', padding:5, borderRadius:10}}/>
                        <p style={{fontSize: 20, textAlign: 'left'}}>
                            <strong>Paolo Lasagna di Montemagno</strong> is an entrepreneur in the field of Contract Catering and of Catering Services since 1994.
                            Born in Asti (Piedmont, Italy), began his career since the "First Steps" with his father Silvio, who always took care of Catering.
                            Noted in 2009 the "Eutourist Serv-System S.P.A." , sold previously by his father. In less than a year, a passion for innovation, the knowledge of Food Chains, the constant search for Italian tastes and flavors in the choice of raw materials, have helped to develop the activity coming to a production of about 44,000 meals cooked and served fresh daily.
                            To date, sold the restaurant business, is involved in Food Logistics Services with "P.L. Company S.R.L.".                        
                        </p>
                    </div>
                    <div>
                        <img src={pic6} style={{maxWidth:'100%', borderRadius:10}}/>
                    </div>
                </div>
            </div>         
        );
    }
}

export default AboutUs;