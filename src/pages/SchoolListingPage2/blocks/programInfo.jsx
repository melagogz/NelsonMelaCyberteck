import staff from './../../../images/staff.PNG';
import tick_icon from "./../../../images/tick_icon.png";
import teachers_img from './../../../images/teachers.png';
import curve_laptop from './../../../images/curve_laptop.png';
import check from "./../../../images/check.png";
import img_location from "./../../../images/img_at_location.png";
import { Container, Box, Grid, Link, Paper, Typography, Hidden, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import {
    BodyText,
    HeaderBox, HeaderDescription, HeaderTitle, PageBlock, PrimaryButton, PrimaryText, SecondaryText
} from "./../../../features/Atoms";
import AddCircleIcon from '@material-ui/icons/AddCircle';
export default () => {
    return (
      

                


         <div className=" uk-margin-xlarge-top">
              <div className="uk-container">

                       <div className="uk-width-1-1">
                               <div className="uk-container uk-margin" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                   
                                    <h1 className="header1  uk-text-center uk-margin-large-top "> Additional education from A to Z </h1>
                                    <p className="subText uk-text-center withPaddingLarge ">We supply the locations with both equipment and software, along with the
                                         necessary set-up. Everything prepared in advance to start learning right away.
                                    </p>
                                  </div>
                       </div>

                  <div className="uk-grid" data-uk-grid>
                              <div className="uk-width-1-2@s">

                               {/*Accordion goes here  */}
                                  
                                  <div className="accordionContainer uk-margin-large-top">
                                  <ul uk-accordion="collapsible: false">
                                                    <li uk-scrollspy="cls: uk-animation-fade4; repeat: true">
                                                        <a class="uk-accordion-title accHeader" href="#">Opportunities for all students, no matter the background</a>
                                                        <div class="uk-accordion-content">
                                                            <p>Our courses build skills for the future and everyone is entitled to access education. That is why we offer
                                                                 scholarships to qualified underprivileged students and create equal chances for all.</p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <a class="uk-accordion-title accHeader" href="#">Selection of courses that teach in-demand tech skills</a>
                                                        <div class="uk-accordion-content">
                                                            <p>We chose courses that are proven to build students’ skills for tomorrow. Classes with projects that cover programming like Python, 
                                                                robotics and drone engineering, 3D printing or game design and video animation.</p>
                                                        </div>
                                                    </li>
                                               

                                                    <li>
                                                        <a class="uk-accordion-title accHeader" href="#">Top Tech Experts guide through the world of tech</a>
                                                        <div class="uk-accordion-content">
                                                            <p>Qualified teachers selected from top tech universities make sure knowledge
                                                                 is built at the right pace and made easy for all to understand.
</p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <a class="uk-accordion-title accHeader" href="#">You can bring us to your Location</a>
                                                        <div class="uk-accordion-content">
                                                            <p>Besides existing collaborators, CyberTeck Academy teams up with more: Private Schools, Churches,
                                                                 Home School Groups, Sport Leagues or Parks & Rec Centers to meet your needs. Recommend us and we’ll make it happen.</p>
                                                        </div>
                                                    </li>


                                                    <li>
                                                        <a class="uk-accordion-title accHeader" href="#">We believe in your children </a>
                                                        <div class="uk-accordion-content">
                                                            <p>We know the future will require programming abilities. We want to bring 
                                                                our contribution to schools’ efforts in delivering a useful education for
                                                                 the world of tomorrow.</p>
                                                        </div>
                                                    </li>
                                  </ul>
                                  </div>{/*accordion ends here*/}

                              </div>

                              <div className="uk-width-1-2@s uk-margin-large-top">
                                 <div>
                                     <img src={img_location} alt="Teach In-Demand Tech Skills" uk-scrollspy="cls: uk-animation-scale-up; repeat: true"/>
                                 </div>
                              </div>
                  </div>
             
     









            
             
             </div>

             </div>
    )
}
