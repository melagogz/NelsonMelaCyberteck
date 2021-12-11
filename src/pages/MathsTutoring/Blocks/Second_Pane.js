import React from "react";
import { Link } from "react-router-dom";

import expert_tutor from './../../../images/exp_tutor.png'
import student_icon from './../../../images/student_icon.png'
import maths_exams from './../../../images/maths_exams.png'



const Second_Pane = () => (
    <div className="uk-container ">

        <div className="uk-flex uk-flex-center">
               <div className="mediumContainer">
                   <div className="uk-padding-large">
                       <h1 className="header1 uk-text-center">Your child gets a head start in <span className="greenText"> essential Math</span></h1>
                   </div>
               </div>
        </div>



                      <div className= " uk-flex uk-flex-center">
                          <div className="largeContainer ">
                    <div className="uk-grid " data-uk-grid>


                         <div className="uk-width-1-3@s">
                             <div className="">
                                 <div>
                                     <div className="uk-flex uk-flex-center">
                                         <img src= {expert_tutor} />
                                     </div>
                                 <h4 className="uk-text-bold uk-text-center">Experienced tutors</h4>
                                 <p className="uk-text-center uk-text-small">A tutor who knows exactly what your child needs and how 
                                     to get them there. Helping students understand the subject
                                      in depth and handle study workload are both part of our tutors expertise.</p>

                                      
                                 </div>
                            
                             </div>
                        </div>   




                        <div className="uk-width-1-3@s">
                             <div className="">
                                 <div>
                                     <div className="uk-flex uk-flex-center">
                                         <img src= {student_icon} />
                                     </div>
                                 <h4 className="uk-text-bold uk-text-center">Unique approach for every kid</h4>
                                 <p className="uk-text-center uk-text-small">Communication and assessment make sure your
                                  child will soon find topics in school to be easy and homework to be approachable. 
                                  Target: loving Math!
                                  </p>

                                      
                                 </div>
                            
                             </div>
                        </div> 



                        <div className="uk-width-1-3@s">
                             <div className="">
                                 <div>
                                     <div className="uk-flex uk-flex-center">
                                         <img src= {maths_exams} />
                                     </div>
                                 <h4 className="uk-text-bold uk-text-center">Pass all Math Exams </h4>
                                 <p className="uk-text-center uk-text-small">Step by step targeted preparation means no more 
                                 worries before exams. Test subjects are revised, explained and practiced until math seems
                                  easy and exams are just a challenge.</p>

                                      
                                 </div>
                            
                             </div>
                        </div>   
                    </div>
                    </div>
                    </div>

        </div>
    
)



export default Second_Pane