import React from "react";
import { Link } from "react-router-dom";
import check from "../../../../images/check.png"


const Second_Pane = () => (

                        <div>
                            <div className="uk-container">
                                 <div className="uk-flex uk-flex-center">
                                    <div className="mediumContainer uk-margin-large-top uk-margin-large-bottom">
                                         <p className="uk-text-center uk-padding-small">Algebra Tutoring helps your child build math abilities and solidify knowledge to
                                              take them to the next grades. Students learn everything about functions and their 
                                              transformations, polynomial factorization and division, logarithms and exponential 
                                              models to meet academic standards.Modeling with rational functions, generating graphs 
                                              and making operations with rational expressions are also included and open the door
                                               for students to many college options.</p>
                                    </div>
                                    </div>

                         
                            </div>


                            <div className="uk-grid " data-uk-grid>
                                       <div className="uk-width-1-2">
                                         <div className="uk-margin-large-left uk-margin-large-top">
                                         <h4 className="uk-text-center uk-text-bold">With Algebra Tutoring, your child will:</h4>

                                             <div className="width500">
                                          
                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeftMore"><p className="">Know all about polynomial factorization, division and graphs</p></div>
                            </div>
                        </div>

                                           
                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeftMore"><p className="">Be able to solve equations by graphing</p></div>
                            </div>
                        </div>


                                    
                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeftMore"><p className="">Interpret exponential change and solving logarithms</p></div>
                            </div>
                        </div>

                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeftMore"><p className="">Understand scaling functions and generating graphs of exponential functions</p></div>
                            </div>
                        </div>


                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeftMore"><p className="">Be able to model with multiple variables and with rational functions</p></div>
                            </div>
                        </div>


                        <div class="uk-text-center uk-margin-remove-top uk-margin-small-bottom" data-uk-grid>
                            <div class="uk-width-1-4">
                                <div class=""><img src={check} className="iconSmallMaths" /></div>
                            </div>
                            <div class="uk-width-3-4">
                                <div class="uk-text-left moveLeftMore"><p className="">Have the basics needed for Trigonometry classes</p></div>
                            </div>
                        </div>






                                              </div>



                                            </div>
                                       </div>

                                       <div className="uk-width-1-2">
                                            <div className="BgMthsR">

                                            </div>
                                       </div>
                                   </div>
                        </div>
)

export default Second_Pane;