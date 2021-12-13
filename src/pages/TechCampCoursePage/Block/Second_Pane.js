import react from 'react';
import bIcon from './../../../images/bIcon2.png'
import schoolLocation from './../../../images/courses-at-school-location-icon.png'
import {Link } from 'react-router-dom'
import studentBg from './../../../images/student_bg.jpg'






const Second_Pane = () => (

            <section className="uk-margin-xlarge-bottom">
                    <div className="uk-grid-collapse uk-grid" data-uk-grid>
                         <div className="uk-width-1-2@l">
                             <div className="techCampGrayBg uk-padding-large">
                                      <h3 className="header3 uk-text-center uk-padding normalPaddingLR">Pick your Camp and choose your ground</h3>
                                      <div className="negativeDiv normalPaddingLR">   
                                      <p className="uk-text-center subTextSmall "> Choose the option that fits you best: Virtual from at home or
                                           at Location School and Parks & Rec Centers </p>
                                        </div>


                                        <div class="uk-flex uk-flex-center">

                                           <Link to ="/virtual-tech-camp">     <div class="VirTechBg" uk-scrollspy="cls: uk-animation-slide-top; repeat: true">
                                                   
                                                          <div className="uk-flex uk-flex-center ">
                                                               <img src={bIcon}  className="icon uk-margin-medium-top"/>
                                                          </div>
                                                        <div className="uk-flex uk-flex-center ">
                                                             <h4 className="iconHeaderBold light uk-text-center uk-margin-small-top">  Virtual Tech Camp</h4>
                                                               
                                                        </div>
                                                </div></Link>


                                                <Link to ="/tech-camp-at-school-location" > <div class="atLocationBg uk-margin-left" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">

                                                     <div className="uk-flex uk-flex-center ">
                                                               <img src={schoolLocation}  className="icon uk-margin-medium-top"/>
                                                          </div>
                                                        <div className="uk-flex uk-flex-center ">
                                                             <h4 className="iconHeaderBold light uk-text-center uk-margin-small-top"> At School Locations</h4>
                                                               
                                                        </div>
                                                </div>
                                                </Link>





                                                         
                                        </div>

                                    </div>
                         </div>

                         <div className="uk-width-1-2@l">
                             <div className="" role="img" aria-label="[Online Coding Camp]"
                             
                             style={{ backgroundImage: `url(${studentBg})`,
                             backgroundRepeat: 'no-repeat',
                             backgroundSize: 'cover',
                             paddingBottom: '67px',
                             height: '73vh',
                               }}
                             
                             >
                                   
                           
                             
                            </div>
                         </div>
                    </div>
            </section>    
);



export default Second_Pane;