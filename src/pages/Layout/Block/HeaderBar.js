import React, { useState , useEffect  } from "react";
import { Grid, Button, Paper, Hidden, Divider, Drawer, ListItem, List, ListItemText, IconButton } from "@material-ui/core";
import mainLogo from "./../../../images/logo_main.png";
import Authentication from "./../../../features/Authentication";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from "./Navbar.module.css";


import { connect } from "react-redux";





const HeaderBar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

          return (

            <div>

              <div className="uk-container">

                <div class="uk-position-relative">
         
                 <div class="uk-position-top">
                     <nav class="uk-navbar-container uk-navbar-transparent" data-uk-navbar>


                <div class="uk-navbar-left" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                      <Link to ="/"><img src= {mainLogo} className="logoStyle"/> </Link>
                  </div>


                        
                 <div class="uk-navbar-center">
                 <nav class="stroke  "   >
                        <ul class="uk-navbar-nav ">
                            

                            <li>
                                <a href="#">Programs</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <Link to ="/virtualcourses"><li class="uk-active "><a href="#"> Virtual-one-on-one</a></li></Link>
                                       <Link to ="/techcamp-course"> <li className=""><a href="#">Tech Camps</a></li> </Link>
                                       <Link to ="/VirtualSmallGroup"> <li className=""><a href="#">Virtual Small Group</a></li> </Link>
                                       <Link to ="/schools"> <li className=""><a href="#">At School Location</a></li> </Link>
                                    </ul>
                                </div>
                            </li>



                            <li>
                                <a href="#">Courses</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                        
                                      <Link to = "/computer-course"><li class="uk-active "><a href="#">   Computer Courses</a></li> </Link>
                                        <li class="uk-active "><a href="#">   Coding Courses</a></li>
                                        <li className=""><a href="#">Game Dev Courses</a></li>
                                        <li className=""><a href="#"> All Courses</a></li>
                                       {/** <li className=""><a href="#">Maths Courses</a></li> ***/ }
                                    </ul>
                                </div>
                            </li>



                             <li>
                                <a href="#">Why CyberTeck</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                      <Link to ="/about-us">  <li class="uk-active "><a href="#">About Us</a></li> </Link>
                                      <Link to ="/teacher" > <li className=""><a href="#"> Our Teachers</a></li> </Link>
                                      <Link to ="/blog">  <li className=""><a href="#">Blog</a></li> </Link>
                                       <Link to ="/contactus" > <li className=""><a href="#">Contact Us</a></li> </Link>
                                        <li className=""><a href="#">Online programs FAQs</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        </nav>
                 </div>



                 <div class="uk-navbar-right">

                   <div className="uk-grid uk-grid-collapse" data-uk-grid>
                     <div className="uk-width-1-2">
                     <div>
                       <Authentication />
                      </div>
                     </div>

                     <div className="uk-width-1-2">
                     <div className={styles.navbar}>
                                          
                                          <Link to="/cart">
                                            <div className={styles.navbar__cart}>
                                              <img
                                                className={styles.cart__image}
                                                
                                                alt="shopping cart"
                                              /><a href="" uk-icon="cart" className="cartIcon"></a>
                                              <div className={styles.cart__counter}>{cartCount}</div>
                                            </div>
                                          </Link>
                                        </div>
                     </div>

                   </div>
                     
                   
                   </div>





                 

                  
                </nav>
                </div>
                </div>
            </div>
        </div>
            
  
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};



export default connect(mapStateToProps)(HeaderBar);
