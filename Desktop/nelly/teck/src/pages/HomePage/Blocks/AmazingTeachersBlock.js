import {
    PrimaryButton,
    PageBlock, PrimaryText, BodyText
} from "../../../features/Atoms"
import {
    Grid
} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import teachers from "./../../../images/teachers.png";
import check from "./../../../images/check.png";
import {Link } from 'react-router-dom'



const AmazingTeachersBlock = () => (
               <div className="uk-container  negativeTopMarginLargeNew uk-margin-top uk-padding  uk-margin-small-bottom">
                    <div className="uk-width-1-1 ">
                    <h5 className="uk-text-center smallTextTopHeader uk-text-small">Expert Teachers for future Tech experts</h5>
                    <h3  className="header1 withPaddingLarge" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">Accelerate your child’s path to a
future tech savvy with top  <span className="greenText">Teachers</span></h3>
                    <p className="subText uk-text-center  uk-padding withPaddingLarge">Our teachers put their passion where their expertise is. Selected from tech universities, IT experts
                                                      are here to awaken your child’s interest in the world of Tech. Fun is contagious and students build critical thinking, design abilities and creativity under the right guidance.</p>
              </div>



                        <div className="uk-grid uk-margin-large-top" data-uk-grid>
                              <div className="uk-width-1-2@s ">
                              <div className="uk-margin-medium-top">
                               
                               <div className="uk-margin-medium-bottom">
                                <h5  className=" " uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">Dedicated teachers inspire young minds and  <span className="greenText">
                                build a creative hub </span>   </h5>
                                <p className="subText uk-text-left paddingRight ">Top teachers, the right approach and an open attitude to learning are the 
                                ingredients that promise results in school.</p>
                                </div>
                                    

                                   <div className="uk-"> 
                                <div class="uk-flex ">
                                        <div class="iconCheck"><img src= {check}  uk-scrollspy="cls: uk-animation-fade; repeat: true"/></div>
                                        <div class="iconHeader uk-margin-left"     uk-scrollspy="cls: uk-animation-fade; repeat: true"><p>Recruited from top tech universities like MIT or NYU</p></div>
                                        
                                </div>
                                

                                <div class="uk-flex">
                                        <div class="iconCheck"><img src= {check}  uk-scrollspy="cls: uk-animation-fade; repeat: true"/></div>
                                        <div class="iconHeader uk-margin-left "    uk-scrollspy="cls: uk-animation-fade; repeat: true"><p>USA-based teachers selected after extensive background checks</p></div>
                                        
                                </div>



                                <div class="uk-flex">
                                        <div class="iconCheck"><img src= {check}  uk-scrollspy="cls: uk-animation-fade; repeat: true"/></div>
                                        <div class="iconHeader uk-margin-left"   uk-scrollspy="cls: uk-animation-fade; repeat: true"><p>Deliver results with proven teaching methods for all students</p></div>
                                        
                                </div>


                                <div class="uk-flex">
                                        <div class="iconCheck"><img src= {check}  uk-scrollspy="cls: uk-animation-fade; repeat: true"/></div>
                                        <div class="iconHeader uk-margin-left"  uk-scrollspy="cls: uk-animation-fade; repeat: true"><p>Know how to connect to students and develop their creative curiosity</p></div>
                                        
                                </div>

                                <div class="uk-flex withPadding ">
                                        <Link to="/teacher"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Meet Our Teachers</div> </Link>
                                        </div>


                               </div>


                                </div>
                              </div>

                              <div className="uk-width-1-2@s ">
                                    <div className="imgDiv " uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                                        <img src={teachers} alt="1 on 1 Tutoring" class=""/> 
                                    </div>
                              </div>
                        </div>
               </div>
);
export default AmazingTeachersBlock;

