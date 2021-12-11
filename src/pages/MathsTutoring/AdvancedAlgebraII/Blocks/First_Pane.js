import React from "react";
import { Link } from "react-router-dom";
import price from "../../../../images/price.png"
import grade from "../../../../images/grade.png"
import skill from "../../../../images/skill.png"
import tools from "../../../../images/tools.png"
import prerequisite from "../../../../images/prerequisite.png"

import path from "../../../../images/path.png"
import check from "../../../../images/check.png"







const FirstPane = () => (

    <div>
        {/****First Pane***/}
         <div className="AdvancedHeaderBg">
            
            <div className="uk-container" >
            <div className="uk-grid  " data-uk-grid>
                 <div className="uk-width-3-4@s">
                      <div className="uk-margin-xlarge-top " >
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true"> Advanced Algebra II Tutoring</h1>
                      
                      </div>

                      
  
                 </div>

                 <div className="uk-width-1-4@s">
                     
                 </div>
            </div>
            </div>
        </div>{/****First Pane ENDS HERE!***/}




        
        {/****Second Pane***/}
           <div className="uk-container">
                <div className="uk-grid" data-uk-grid>
                     <div className="uk-width-2-3@s">

                     <div class="uk-card uk-margin-large-top uk-card-default uk-card-body rightContentDiv">
                         <div className="uk-grid" data-uk-grid>
                                 <div className="uk-width-1-3">
                                     <div className="uk-flex uk-flex-center">
                                         <div className="flexContainer">
                                              <h4 className="uk-text-bold uk-text-center">PRICING</h4>
                                              <img src={price} className="mathsIcons uk-margin-small-bottom"/>
                                              <p className="uk-text-bold uk-margin-small-top uk-text-center">$72</p>
                                         </div>
                                     </div>
                                 </div>

                                 <div className="uk-width-1-3">
                                 <div className="uk-flex uk-flex-center">
                                         <div className="flexContainer">
                                              <h4 className="uk-text-bold uk-text-center">GRADE</h4>
                                              <img src={grade} className="mathsIcons uk-margin-small-bottom"/>
                                              <p className="uk-text-bold uk-margin-small-top uk-text-center">1-3</p>
                                         </div>
                                     </div>
                                 </div>

                                 <div className="uk-width-1-3">
                                 <div className="uk-flex uk-flex-center">
                                         <div className="flexContainer">
                                              <h4 className="uk-text-bold uk-text-center">SKILL LEVEL</h4>
                                              <img src={skill} className="mathsIcons uk-margin-small-bottom"/>
                                              <p className="uk-text-bold uk-margin-small-top uk-text-center">Beginner</p>
                                         </div>
                                     </div>
                                 </div>
                         </div>

                         {/**Second row***/}
                         <div className="uk-grid uk-margin-large-top" data-uk-grid>
                                 <div className="uk-width-1-3">
                                     <div className="uk-flex uk-flex-center">
                                         <div className="flexContainer">
                                              <h4 className="uk-text-bold uk-text-center">TOOLS</h4>
                                              <img src={tools} className="mathsIcons uk-margin-small-bottom"/>
                                              <p className="uk-text-bold uk-margin-small-top uk-text-center"></p>
                                         </div>
                                     </div>
                                 </div>

                                 <div className="uk-width-1-3">
                                 <div className="uk-flex uk-flex-center">
                                         <div className="flexContainer">
                                              <h4 className="uk-text-bold uk-text-center">REQUIREMENTS</h4>
                                              <img src={prerequisite} className="mathsIcons uk-margin-small-bottom"/>
                                              <p className="uk-text-bold uk-margin-small-top uk-text-center"></p>
                                         </div>
                                     </div>
                                 </div>

                                 <div className="uk-width-1-3">
                                 <div className="uk-flex uk-flex-center">
                                         <div className="flexContainer">
                                              <h4 className="uk-text-bold uk-text-center">PATH</h4>
                                              <img src={path} className="mathsIcons uk-margin-small-bottom"/>
                                              <p className="uk-text-bold uk-margin-small-top uk-text-center">Maths</p>
                                         </div>
                                     </div>
                                 </div>
                         </div>
                     </div>

                     </div>

                     <div className="uk-width-1-3@s">
                       <div className="leftContentArea uk-card uk-margin-large-top ">

                          <h4 className="uk-text-bold uk-padding-small">This Course will Cover</h4>
                          <div class="uk-text-center uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths"/></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeft"><p>Complex numbers, adding, subtracting and multiplying</p></div>
                            </div>
                        </div>


                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeft"><p className="">Polynomial factorization, polynomial division</p></div>
                            </div>
                        </div>


                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeft"><p className="">Logarithm concepts and properties, solving exponential models</p></div>
                            </div>
                        </div>

                        

                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeft"><p className="">Transformation of functions, solving equations by graphing</p></div>
                            </div>
                        </div>


                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeft"><p className="">Modeling with function combination, modeling with multiple variables</p></div>
                            </div>
                        </div>



                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeft"><p className="">Rational functions, modeling, operations with rational expressions</p></div>
                            </div>
                        </div>

                       </div>

                     </div>
                </div>
           </div>
           






        </div>
)

export default FirstPane;