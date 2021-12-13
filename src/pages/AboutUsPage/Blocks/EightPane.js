import react from 'react';
import stats1 from '../../../images/stats1.png';
import stats2 from '../../../images/stats2.png';
import stats3 from '../../../images/stats3.png';
import stats4 from '../../../images/stats4.png';
import { Link } from "react-router-dom";

import statsBg from  '../../../images/aboutCyberTeckAcademy.png';

import statsBgSmall from  '../../../images/aboutCyberTeckAcademySmall.png';


const EightPane = () =>(

    <div>


            {/**DESKTOP VIEW**/}
           <div className=" uk-visible@s  uk-padding-large"
           
           
           style={{ backgroundImage: `url(${statsBg})`,
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover',
           paddingBottom: '100px'
       
           
       
             }}
           
           
           
           
           >
                     <div className="uk-container">
                     <div className="uk-padding-large">
                           <h5 className="uk-text-center lightText  uk-text-small smallTopHeading">MORE ABOUT US</h5>
                           <h1 className="header1 lightText uk-text-center">CyberTeck Academy’s Stats & Facts</h1>
                           <div className="uk-text-center testyDesc">
                           <p className="lightText" >Here you can review some statistics about our Education Center</p></div>

                     </div>


              <div>
                      
                             <div className="uk-margin-top statsContainer  ">               
                        <div class="uk-grid-large uk-child-width-expand@s uk-text-center" data-uk-grid>

                        <div>
                                <div class="uk-margin-xlarge-top@s bIcon">
                                    <img src={stats1}  className="statsImg"/>
                                    
                                    <h4 className="headerBold"> 81% Increase in academic results</h4>
                                    
                                </div>
                            </div>

    
                                <div class="uk-margin-xlarge-top@s bIcon">
                                    <img src={stats4}  className="statsImg"/>
                                   
                                    <h4 className="headerBold"> 4713 Tech hours completed</h4>
                                    
                                </div>


                                <div class="uk-margin-xlarge-top@s bIcon">
                                    <img src={stats2}  className="statsImg"/>
                                    
                                    <h4 className="headerBold"> Students with basic tech skillsare 92% more likely to get a degree</h4>
                                    
                                </div>



                                <div class="uk-margin-xlarge-top@s bIcon">
                                    <img src={stats3}  className="statsImg"/>
                                    
                                    <h4 className="headerBold"> Satisfied kids and parents</h4>
                                    
                                </div>

                        </div>





                                 <div className="uk-margin-large-top">
                                        <div class="uk-flex uk-flex-center">
                                       <Link to="/contactus" > <div class="btn-light" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Get in Touch</div> </Link>
                                       <Link to="/courses" > <div class=" btn-ghost-light uk-margin-left" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">See all Courses</div> </Link>
                                            
                                        </div>

                                 </div>


                        </div>
</div>

              </div>

           </div>













           
            {/**MOBILE VIEW**/}
            <div className=" uk-hidden@s  uk-padding-large"
           
           
           style={{ backgroundImage: `url(${statsBgSmall})`,
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover',
           paddingBottom: '100px'
       
           
       
             }}
           
           
           
           
           >
                     <div className="uk-container">
                     <div className="uk-padding-large">
                           <h5 className="uk-text-center lightText  uk-text-small smallTopHeading">MORE ABOUT US</h5>
                           <h1 className="header1 lightText uk-text-center">CyberTeck Academy’s Stats & Facts</h1>
                           <div className="uk-text-center testyDesc">
                           <p className="lightText" >Here you can review some statistics about our Education Center</p></div>

                     </div>


              <div>
                      
                             <div className="uk-margin-top statsContainer  ">               
                        <div class="uk-grid-large uk-child-width-expand@s uk-text-center" data-uk-grid>

                        <div>
                                <div class="uk-margin-xlarge-top@s bIcon">
                                    <img src={stats1}  className="statsImg"/>
                                    
                                    <h4 className="headerBold"> 81% Increase in academic results</h4>
                                    
                                </div>
                            </div>

    
                                <div class="uk-margin-xlarge-top@s bIcon">
                                    <img src={stats4}  className="statsImg"/>
                                   
                                    <h4 className="headerBold"> 4713 Tech hours completed</h4>
                                    
                                </div>


                                <div class="uk-margin-xlarge-top@s bIcon">
                                    <img src={stats2}  className="statsImg"/>
                                    
                                    <h4 className="headerBold"> Students with basic tech skillsare 92% more likely to get a degree</h4>
                                    
                                </div>



                                <div class="uk-margin-xlarge-top@s bIcon">
                                    <img src={stats3}  className="statsImg"/>
                                    
                                    <h4 className="headerBold"> Satisfied kids and parents</h4>
                                    
                                </div>

                        </div>





                                 <div className="uk-margin-large-top">
                                        <div class="uk-flex uk-flex-center">
                                       <Link to="/contactus" > <div class="btn-light" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Get in Touch</div> </Link>
                                       <Link to="/courses" > <div class=" btn-ghost-light uk-margin-left" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">See all Courses</div> </Link>
                                            
                                        </div>

                                 </div>


                        </div>
</div>

              </div>

           </div>

           
</div>

);


export default EightPane;
