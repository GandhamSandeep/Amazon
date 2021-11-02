import react, { Component } from 'react';
import { Button,Nav,Navbar,Form,FormControl,Dropdown,Carousel,Card,link, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './sandeep.css';
import { GoLocation } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FcMenu } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";




class Sandeep1 extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark" id="nav1">
                    <img src="amazon3.jpg" id="button"></img><p id="white">.in</p>                        
                    <GoLocation id="loc"/>
                    <p id="font">Hello<br/>Select your address</p>
                    <select id="all">
                        <option id="all1">All</option>
                    </select>
                    <input type="search" id="search"></input>
                    <AiOutlineSearch id="icon"/>
                    <img src="flag.png" id="flag"></img>
                    <BsFillCaretDownFill id="iocn2"/>
                    <Link to="/sandy"><p id="sign">Hello,sign<br/>Account&Lists</p></Link>
                    <BsFillCaretDownFill id="icon5"/>
                    <p id="return">Return<br/>&Orders</p>
                    <BsFillCaretDownFill id="icon9"/>
                    <BiCart id="kart"/>
                    <p id="cart">Cart</p>                                            
                </Navbar>
                
                <Navbar variant="dark" id="height1">
                    <BsList id="Bslist"/>
                    <p id="pall">All</p>
                    <p id="best">Best sellers</p>
                    <p id="best">Today's deals</p>
                    <p id="best">Mobiles</p>
                    <p id="best">Prime</p>
                    <BsFillCaretDownFill id="prime"/>
                    <p id="bes">New Releases</p>
                    <p id="best1">Fashion</p>
                    <p id="best2">Custom services</p>
                    <p id="best3">Amazon pay</p>
                    <p id="best4">Electronics</p>
                    <img src="amazoncart.jpg" id="cartwidth"></img>
                    <p id="best5">Shopping made easy | Download th app</p>


                </Navbar>
                <Carousel id="carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="india.jpg"
                            alt="First slide"
                            id="width5"
                            />
                             
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="max.jpg"
                            alt="Third slide"
                            id="width5"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="jel.jpg"
                            alt="Third slide"
                            id="width5"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="amazonmobile.jpg"
                            alt="Third slide"
                            id="width5"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="onemem.jpg"
                            alt="Third slide"
                            id="width5"
                            />

                            
                        </Carousel.Item>
                   </Carousel>
                   <br/>

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-3">
                            <Card id="card1">
                                <p id="top">Top picks for your home</p>
                                <img src="Acs.jpg" id="acs"></img>
                                <p id="see">Ac's</p>
                                <img src="washing.jpg" id="washing"></img>
                                <p id="machine">washing machine</p>
                                <img src="televisions.jpg" id="tele"></img>
                                <p id="see">Televisions</p>
                                <img src="refridge.jpg" id="ref"></img>
                                <p id="machine">Refrigerators</p>
                                <a id="more">See more</a>
                                
                            </Card>

                            </div>
                            
                            <div class="col-3">
                            <Card id="card1">
                                <p id="top">Home essentials | Amazon Brands</p>
                                <img src="bedsheets.jpg" id="acs"></img>
                                <p id="see">Bedsheets,curtains</p>
                                <img src="cloth.jpg" id="washing"></img>
                                <p id="machine">cloth organizer's</p>
                                <img src="wall.jpg" id="tele"></img>
                                <p id="see">Wall stickers</p>
                                <img src="smart.jpg" id="ref"></img>
                                <p id="machine">Smart bulbs</p>
                                <a id="more">See more</a>
                                
                            </Card>

                            </div>
                            <div class="col-3">
                            <Card id="card1">
                                <p id="top">Style for Mens 70% off</p>
                                <img src="clothing.jpg" id="acs"></img>
                                <p id="see">Clothing</p>
                                <img src="footwear1.jpg" id="washing"></img>
                                <p id="machine">Footwear</p>
                                <img src="watches1.jpg" id="tele"></img>
                                <p id="see">Wacthes</p>
                                <img src="bags.jpg" id="ref"></img>
                                <p id="machine">Bags&laugauge</p>
                                <a id="more">View offer's</a>
                                
                            </Card>

                            </div>
                            <div class="col-3">
                            <Card id="card10">
                                <p id="in">Sign in for your best experience</p>
                                <button id="up">Sign up</button>
                                
                                
                            </Card>
                            <br/>
                            <br/>
                            <Card id="card96">
                                
                                <img src="lap.jpg" id="lap"></img>
                                
                            </Card>

                            </div>
                            
                        </div>
                    </div> 
                    <br/>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-3">
                            <Card id="card1">
                                <p id="top">Style for Women | Up to 70% off</p>
                                <img src="womensclothing.jpg" id="acs"></img>
                                <p id="see">womens clothing</p>
                                <img src="foothand.jpg" id="washing"></img>
                                <p id="machine">footwear+handbags</p>
                                <img src="watches8.jpg" id="tele"></img>
                                <p id="see">watches</p>
                                <img src="jwel.jpg" id="ref"></img>
                                <p id="machine">Fashion jwellary</p>
                                <a id="more">See more</a>
                                
                            </Card>

                            </div>
                            
                            <div class="col-3">
                            <Card id="card1">
                                <p id="top">Shop by Category</p>
                                <img src="fresh.jpg" id="acs"></img>
                                <p id="see">Fresh</p>
                                <img src="mobile.jpg" id="washing"></img>
                                <p id="machine">mobiles</p>
                                <img src="fashion7.jpg" id="tele"></img>
                                <p id="see">Fashion</p>
                                <img src="electronics.jpg" id="ref"></img>
                                <p id="machine">Electronics</p>
                                <a id="milk09">See more</a>
                                
                            </Card>

                            </div>
                            <div class="col-3">
                            <Card id="card1">
                                <p id="top">Chocolates, sweets & more</p>
                                <img src="dairymilk.jpg" id="milk"></img>
                                <a id="milk0">See more</a>
                                
                            </Card>

                            </div>
                            <br/>
                            <div class="col-3">
                            <Card id="card20">
                                <p id="top">Automotive essentials 60% off</p>
                                <img src="helmets.jpg" id="acs"></img>
                                <p id="see">Helmets</p>
                                <img src="tyres,jpg.jpg" id="washing"></img>
                                <p id="machine">Tyres</p>
                                <img src="pressure.jpg" id="tele"></img>
                                <p id="see">Pressure washers</p>
                                <img src="protective.jpg" id="ref"></img>
                                <p id="machine">Protective gear</p>
                                <a id="more">View offer's</a>
                                
                            </Card>

                            </div>
                            
                        </div>
                    </div>           
                    <br/>        
                    <div id="furt">
                        <img src="homefurnishing.jpg"></img>
                    </div>
                    <br/>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-3">
                            <Card id="card1">
                                <p id="top">Handpicked products for your baby</p>
                                <img src="newbornbaby.jpg" id="acs"></img>
                                <p id="see">Newborn baby store</p>
                                <img src="diapers.jpg" id="washing"></img>
                                <p id="machine">Diapers & wipers</p>
                                <img src="premium.jpg" id="tele"></img>
                                <p id="see">Premium baby stores</p>
                                <img src="allbaby.jpg" id="ref"></img>
                                <p id="machine">All baby products</p>
                                <a id="more">See more</a>
                                
                            </Card>

                            </div>
                            
                            <div class="col-3">
                            <Card id="card1">
                                <p id="top">Cookware & dining</p>
                                <img src="gasstoves.jpg" id="acs"></img>
                                <p id="see">Gas stoves</p>
                                <img src="cookware.jpg" id="washing"></img>
                                <p id="machine">Cookware</p>
                                <img src="kitchen.jpg" id="tele"></img>
                                <p id="see">Kitchen storage</p>
                                <img src="tableware.jpg" id="ref"></img>
                                <p id="machine">Tableware</p>
                                <a id="milk09">See more</a>
                                
                            </Card>

                            </div>
                            <div class="col-3">
                            <Card id="card1">
                                <p id="top">For efficient home working</p>
                                <img src="efficient.jpg" id="milk"></img>
                                <a id="milk0">See more</a>
                                
                            </Card>

                            </div>
                            <br/>
                            <div class="col-3">
                            <Card id="card20">
                                <p id="top">Pick from these types of masks</p>
                                <img src="n95mask.jpg" id="acs"></img>
                                <p id="see">N95mask&respirators</p>
                                <img src="clothmask.jpg" id="washing"></img>
                                <p id="machine">Cloth mask</p>
                                <img src="facemask.jpg" id="tele"></img>
                                <p id="see">Face coverings</p>
                                <img src="viewmask.jpg" id="ref"></img>
                                <p id="machine">View the mask stores</p>
                                <a id="more">View offer's</a>
                                
                            </Card>

                            </div>
                            
                        </div>
                    </div>
                    <br/>        
                    <img src="amazonlang.jpg" id="furt1"></img>
                    <br/>
                    <br/>
                    <Navbar variant="dark" id="height1">
                        <p id="back">Back to top</p>
                    </Navbar>
                    <footer id="footer">
                        <div class="container-fluid">
                        
                        <div class="row">
                        <div class="col-3">
                        <Card id="cardget">
                        <div id="get2">Get to known us
                        <div>
                        <ul id="a2">
                            <a href="#">About</a><br/>
                            <a href="#">Careers</a><br/>
                            <a href="#">Press Releases</a><br/>
                            <a href="#">Amazon Cares</a><br/>
                            <a href="#">Gift a Smile</a><br/>
                        </ul>
                        </div>
                        </div>
                        </Card>
                        </div>

                        <div class="col-3">
                        <Card id="cardget1">
                        <div id="get3">Contact with us
                        <ul id="a3">
                            <a href="#">Facebook</a><br/>
                            <a href="#">Twitter</a><br/>
                            <a href="#">Instagram</a><br/>
                            
                            
                        </ul>
                        </div>
                        </Card>
                        </div>

                        <div class="col-3">
                        <Card id="cardget2">
                        <div id="get4">Make Money with Us
                        <ul id="a4">
                            <a href="#">Sell on Amazon</a><br/>
                            <a href="#">Sell under Amazon Accelerator</a><br/>
                            <a href="#">Become an Affiliate</a><br/>
                            <a href="#">Fulfilment by Amazon</a><br/>
                            <a href="#">Advertise Your Products</a><br/>
                            <a href="#">Amazon Pay on Merchants</a><br/>
                            
                        </ul>
                        </div>
                        </Card>
                        </div>

                        <div class="col-3">
                        <Card id="cardget3">
                        <div id="get5">Let Us Help You
                        <ul id="a4">
                            <a href="#">COVID-19 and Amazon</a><br/>
                            <a href="#">Your Account</a><br/>
                            <a href="#">Returns Centre</a><br/>
                            <a href="#">100% Purchase Protection</a><br/>
                            <a href="#">Amazon App Download</a><br/>
                            <a href="#">Amazon Assistant Download</a><br/>
                            <a href="#">Help</a><br/>
                            
                        </ul>
                        </div>
                        </Card>
                        </div>
                    </div>
                    </div>
                    </footer>
                    
                    
                    
                    
            </div>
        );
        
    }
}
export default Sandeep1;