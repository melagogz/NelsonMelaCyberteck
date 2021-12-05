
import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Rating } from '@material-ui/lab';
import {
  Grid, Avatar, Box, IconButton
} from "@material-ui/core";

import KeyboardArrowRightTwoToneIcon from '@material-ui/icons/KeyboardArrowRightTwoTone';
import KeyboardArrowLeftTwoToneIcon from '@material-ui/icons/KeyboardArrowLeftTwoTone';

import "slick-carousel/slick/slick-theme.css";
import testifyOne from '../../../images/testifyOne.png'
import testifyTwo from '../../../images/testifyTwo.png'
import testifyThree from '../../../images/testifyThree.png'
import testifyFive from '../../../images/testifyFive.png'
import testifyFour from '../../../images/testifyFour.png'
import testifySix from '../../../images/testifySix.png'
import testifySeven from '../../../images/testifySeven.png'
import testifyEight from '../../../images/testifyEight.png'
import testifyNine from '../../../images/testifyNine.png'
import testifyTen from '../../../images/testifyTen.png'
import testifyEleven from '../../../images/testifyEleven.png'









  
  export default class CustomArrows extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <IconButton>
            <KeyboardArrowRightTwoToneIcon />
        </IconButton>,
        prevArrow: <IconButton>
            <KeyboardArrowLeftTwoToneIcon />
        </IconButton>,


        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  dots: true
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]



      };
      return (
        <div className="uk-container uk-padding testimonialBgHome" uk-scrollspy="cls: uk-animation-fade; repeat: true">
             

                     <div className="">
                           <h5 className="uk-text-center smallTextTopHeader uk-text-small">TESTIMONIAL</h5>
                           <h1 className="header1 uk-text-center" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">Why do parents <span className="greenText"> love</span> us?</h1>
                           <div className="uk-text-center testyDesc">
                           <p >CyberTeck Academy delivers results. Students enjoy learning from educators
                              passionate about everything tech. Parents notice enhanced academic performance.
                              School gets easier and new doors open. 
                           </p>
                        </div>

                     </div>

          <Slider {...settings}>
            
                {/**First testimony**/}
              <div className="singleTestifyContainer">
                    <div class="uk-flex uk-flex-center">
                       <div class="testifyImage"><img src={testifyOne} /> </div>
                    </div>
                         
                         <div className="testifyTextBg">
                           <div class="uk-flex uk-flex-center ">
                            <p className="testifyText"> I like the teachers and you can tell they
                             care about the student - if they understand, if they have fun. Everyone
                              is taking computer classes, so I think whatever they learn here, will
                               be useful also in school and keep them interested.</p>
                            </div>

                               <div class="uk-flex uk-flex-center "> <Rating readOnly defaultValue={5} /> </div>
                               <div className="testifyHeader uk-flex uk-flex-center"><h4>Leeana M</h4></div>
                               <div className="testifyLocation uk-flex uk-flex-center"><h6>Ashburn</h6></div>
                        </div>
               </div>




            
           
                {/**Second testimony**/}
               <div className="singleTestifyContainer">
                    <div class="uk-flex uk-flex-center">
                       <div class="testifyImage"><img src={testifyThree} /> </div>
                    </div>
                         
                         <div className="testifyTextBg">
                           <div class="uk-flex uk-flex-center ">
                            <p className="testifyText"> This area is not something I am familiar with, but I believe
                             it to be the future for our children. I notice both my kids are interested in attending 
                             this course, so all in all a positive experience for everyone.  </p>
                            </div>

                               <div class="uk-flex uk-flex-center "> <Rating readOnly defaultValue={5} /> </div>
                               <div className="testifyHeader uk-flex uk-flex-center"><h4>Andrew Greenwood</h4></div>
                               <div className="testifyLocation uk-flex uk-flex-center"><h6> Leesburg </h6></div>
                        </div>
               </div>




                  
                {/**Third testimony**/}
               <div className="singleTestifyContainer">
                    <div class="uk-flex uk-flex-center">
                       <div class="testifyImage"><img src={testifyEleven} /> </div>
                    </div>
                         
                         <div className="testifyTextBg">
                           <div class="uk-flex uk-flex-center ">
                            <p className="testifyText"> My boy is all the time excited to learn something new in
                             Minecraft. He is captivated by what his teacher shows him, and tries to make the
                              designs by himself more and more. It’s good to see him so interested in a class..</p>
                            </div>

                               <div class="uk-flex uk-flex-center "> <Rating readOnly defaultValue={5} /> </div>
                               <div className="testifyHeader uk-flex uk-flex-center"><h4>   Hank </h4></div>
                               <div className="testifyLocation uk-flex uk-flex-center"><h6>Georgetown</h6></div>
                        </div>
               </div>



                
                {/**Fourth testimony**/}
               <div className="singleTestifyContainer">
                    <div class="uk-flex uk-flex-center">
                       <div class="testifyImage"><img src={testifyEight} /> </div>
                    </div>
                         
                         <div className="testifyTextBg">
                           <div class="uk-flex uk-flex-center ">
                            <p className="testifyText">I see him energized all the time after the course. He keeps
                                 telling me how cool this and that is and how they built this and that Mod or game
                                  obstacle. He has friends to learn with, so best of both worlds.  </p>
                            </div>

                               <div class="uk-flex uk-flex-center "> <Rating readOnly defaultValue={5} /> </div>
                               <div className="testifyHeader uk-flex uk-flex-center"><h4>Anja Brass</h4></div>
                               <div className="testifyLocation uk-flex uk-flex-center"><h6>Loudoun C</h6></div>
                        </div>
               </div>
           
           





               
                {/**Fifth testimony**/}
               <div className="singleTestifyContainer">
                   
                    <div class="uk-flex uk-flex-center">
                       <div class="testifyImage"><img src={testifyFive} /> </div>
                    </div>
                         
                         <div className="testifyTextBg">
                           <div class="uk-flex uk-flex-center ">
                            <p className="testifyText">Mara is very creative, loves games and couldn’t 
                            wait for tech camp. She’s into technical stuff and these courses are a fit.
                           Roblox has already helped her structure her thinking and have more confidence.   </p>
                            </div>

                               <div class="uk-flex uk-flex-center "> <Rating readOnly defaultValue={5} /> </div>
                               <div className="testifyHeader uk-flex uk-flex-center"><h4>Mel T</h4></div>
                               <div className="testifyLocation uk-flex uk-flex-center"><h6> Hamilton</h6></div>
                        </div>
               </div>




                
                {/**Sixth  testimony**/}
               <div className="singleTestifyContainer">
                    <div class="uk-flex uk-flex-center">
                       <div class="testifyImage"><img src={testifySeven} /> </div>
                    </div>
                         
                         <div className="testifyTextBg">
                           <div class="uk-flex uk-flex-center ">
                            <p className="testifyText">Both my kids are in small group classes for coding.
                             One is faster at picking up programming principles, but both are interested 
                             in the courses. I’m sure it helps they have fellow students to share the 
                             games and the experiences. Everything will need programming soon, and this
                              courses get them ready for this world. </p>
                            </div>

                               <div class="uk-flex uk-flex-center "> <Rating readOnly defaultValue={5} /> </div>
                               <div className="testifyHeader uk-flex uk-flex-center"><h4>R. Daniels</h4></div>
                               <div className="testifyLocation uk-flex uk-flex-center"><h6>  Leesburg</h6></div>
                        </div>
               </div>


               
               
                {/**Seventh testimony**/}
               <div className="singleTestifyContainer">
                    <div class="uk-flex uk-flex-center">
                       <div class="testifyImage"><img src={testifyEight} /> </div>
                    </div>
                         
                         <div className="testifyTextBg">
                           <div class="uk-flex uk-flex-center ">
                            <p className="testifyText">Mike picked up on his tutors’ clues. He’s all about Minecraft, 
                            loves building up blocks and creating new obstacles. I’d like to see him one day making 
                            a living as a video game designer or game developer. Maybe it’s too soon to think so far, 
                            but with the right training…  
                                </p>
                            </div>

                               <div class="uk-flex uk-flex-center "> <Rating readOnly defaultValue={5} /> </div>
                               <div className="testifyHeader uk-flex uk-flex-center"><h4>Mia  </h4></div>
                               <div className="testifyLocation uk-flex uk-flex-center"><h6>Sterling</h6></div>
                        </div>
               </div>






                
                {/**Eight testimony**/}
               <div className="singleTestifyContainer">
                    <div class="uk-flex uk-flex-center">
                       <div class="testifyImage"><img src={testifyNine} /> </div>
                    </div>
                         
                         <div className="testifyTextBg">
                           <div class="uk-flex uk-flex-center ">
                            <p className="testifyText">There is no doubt everyone will need some programming 
                            skills in the future. Even now devices need to be installed and connected. And
                             kids love new technology or devices and they learn really fast if you show them
                              how. So Roblox and Minecraft Animation are the way to go for Andrew and we are 
                              all happy with the choice.   </p>
                            </div>

                               <div class="uk-flex uk-flex-center "> <Rating readOnly defaultValue={5} /> </div>
                               <div className="testifyHeader uk-flex uk-flex-center"><h4>   David </h4></div>
                               <div className="testifyLocation uk-flex uk-flex-center"><h6>Hillsboro</h6></div>
                        </div>
               </div>



          </Slider>
        </div>
      );
    }
  }