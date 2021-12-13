import "./../homepage.css"
import {
    PageBlock, PrimaryText, BodyText, SecondaryText
} from "../../../features/Atoms"
import {
    Grid, List, ListItem
} from "@material-ui/core";
import whychooseicon1 from "./../../../images/whychooseicon1.png"
import whychooseicon2 from "./../../../images/whychooseicon2.png"
import whychooseicon3 from "./../../../images/whychooseicon3.png"
import whychooseicon4 from "./../../../images/whychooseicon4.png"
import whychooseicon5 from "./../../../images/whychooseicon5.png"
import whychooseicon6 from "./../../../images/whychooseicon6.png"
import curvedpics from "./../../../images/curvedpics.png"
import happyKid from "./../../../images/happy_kid.png"
import background from "./../../../images/whychooseBg.jpg"

import backgroundSmall from "./../../../images/whychooseBgSmall.jpg"


const WhyChooseBlock = () => (


    <div>

         {/***DESKTOP VIEW***/}
       <div class=" uk-visible@s  " 
       style={{ backgroundImage: `url(${background})`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       paddingTop: '50px',
       paddingBottom: '70px',
       marginBottom:'80px',
       height: 'auto',

       
   
         }}>

           <div className="uk-container ">

               <div className="uk-grid" data-uk-grid>
                   <div className="uk-width-1-2@s">
                      <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                      <img src = {happyKid} alt="Virtual Learning Classes" />
                       </div>
                   </div>


                   <div className="uk-width-1-2@s ">

                       <div className="uk-margin-medium-top" >
                         <h3 className="header3" uk-scrollspy="cls: uk-animation-fade; repeat: true">Why students choose Cyberteck to supercharge their growth</h3>
                         <p className="subText" uk-scrollspy="cls: uk-animation-fade; repeat: true">Looking for the best computer courses or simply to boost academic
                              results? Cyberteck Academy has you covered. Efficient tutors guide
                               the way and increase chances for a career in IT or prepare students 
                               for the next step in school.</p>
                       </div>


                            <div className="uk-grid uk-grid-collapse" data-uk-grid>
                                   <div className="uk-width-1-1 uk-margin-medium-top">
                                                 <div class="uk-flex">
                                                    <span uk-icon="icon: check; ratio: 1.2"></span>
                                                         <div class="uk-margin-left"   uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                            <h4 className="iconHeaderSmall">Schools and Parks & Rec Centers choose us</h4>
                                                           
                                                        </div>
                                                    
                                                    </div>



                                                    <div class="uk-flex">
                                                    <span uk-icon="icon: check; ratio: 1.2"></span>
                                                         <div class="uk-margin-left" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                            <h4 className="iconHeaderSmall">Learn at your own pace</h4> 
                                                        </div>
                                                    
                                                    </div>



                                                    <div class="uk-flex">
                                                    <span uk-icon="icon: check; ratio: 1.2"></span>
                                                         <div class="uk-margin-left" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                            <h4 className="iconHeaderSmall">Tech skills in demand</h4>   
                                                        </div>
                                                    
                                                    </div>

                                                    <div class="uk-flex">
                                                    <span uk-icon="icon: check; ratio: 1.2"></span>
                                                         <div class="uk-margin-left" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                            <h4 className="iconHeaderSmall">
                                                           Expertise from top educators</h4>   
                                                           </div>
                                                    
                                                    </div>

                                                    <div class="uk-flex">
                                                    <span uk-icon="icon: check; ratio: 1.2"></span>
                                                         <div class="uk-margin-left" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                            <h4 className="iconHeaderSmall">
                                                                Innovators train here</h4>  
                                                                 </div>
                                                    
                                                    </div>

                                                    <div class="uk-flex">
                                                    <span uk-icon="icon: check; ratio: 1.2"></span>
                                                         <div class="uk-margin-left" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                            <h4 className="iconHeaderSmall">Virtual or at Location</h4>   
                                                            </div>
                                                    
                                                    </div>
                                   </div>

                                 
                           </div>
                       
                   
                   </div>
               </div>
               </div>
       </div>








        {/***DESKTOP VIEW***/}
        <div class="  uk-hidden@s " 
        style={{ backgroundImage: `url(${backgroundSmall})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: '50px',
        paddingBottom: '70px',
        marginBottom:'80px',
        height: 'auto',
 
        
    
          }}>
 
            <div className="uk-container ">
 
                <div className="uk-grid" data-uk-grid>
                    <div className="uk-width-1-2@s">
                       <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                       <img src = {happyKid} alt="Virtual Learning Classes" />
                        </div>
                    </div>
 
 
                    <div className="uk-width-1-2@s ">
 
                        <div className="uk-margin-medium-top" >
                          <h3 className="header3" uk-scrollspy="cls: uk-animation-fade; repeat: true">Why students choose Cyberteck to supercharge their growth</h3>
                          <p className="subText" uk-scrollspy="cls: uk-animation-fade; repeat: true">Looking for the best computer courses or simply to boost academic
                               results? Cyberteck Academy has you covered. Efficient tutors guide
                                the way and increase chances for a career in IT or prepare students 
                                for the next step in school.</p>
                        </div>
 
 
                             <div className="uk-grid uk-grid-collapse" data-uk-grid>
                                    <div className="uk-width-1-1 uk-margin-medium-top">
                                                  <div class="uk-flex">
                                                     <span uk-icon="icon: check; ratio: 1.2"></span>
                                                          <div class="uk-margin-left"   uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                             <h4 className="iconHeaderSmall">Schools and Parks & Rec Centers choose us</h4>
                                                            
                                                         </div>
                                                     
                                                     </div>
 
 
 
                                                     <div class="uk-flex">
                                                     <span uk-icon="icon: check; ratio: 1.2"></span>
                                                          <div class="uk-margin-left" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                             <h4 className="iconHeaderSmall">Learn at your own pace</h4> 
                                                         </div>
                                                     
                                                     </div>
 
 
 
                                                     <div class="uk-flex">
                                                     <span uk-icon="icon: check; ratio: 1.2"></span>
                                                          <div class="uk-margin-left" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                             <h4 className="iconHeaderSmall">Tech skills in demand</h4>   
                                                         </div>
                                                     
                                                     </div>
 
                                                     <div class="uk-flex">
                                                     <span uk-icon="icon: check; ratio: 1.2"></span>
                                                          <div class="uk-margin-left" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                             <h4 className="iconHeaderSmall">
                                                            Expertise from top educators</h4>   
                                                            </div>
                                                     
                                                     </div>
 
                                                     <div class="uk-flex">
                                                     <span uk-icon="icon: check; ratio: 1.2"></span>
                                                          <div class="uk-margin-left" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                             <h4 className="iconHeaderSmall">
                                                                 Innovators train here</h4>  
                                                                  </div>
                                                     
                                                     </div>
 
                                                     <div class="uk-flex">
                                                     <span uk-icon="icon: check; ratio: 1.2"></span>
                                                          <div class="uk-margin-left" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                                             <h4 className="iconHeaderSmall">Virtual or at Location</h4>   
                                                             </div>
                                                     
                                                     </div>
                                    </div>
 
                                  
                            </div>
                        
                    
                    </div>
                </div>
                </div>
        </div>

        </div>
);



export default WhyChooseBlock;