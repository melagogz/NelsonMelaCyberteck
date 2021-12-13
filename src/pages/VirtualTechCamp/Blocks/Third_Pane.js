import react from 'react'
import { Link } from 'react-router-dom';
import check from './../../../images/check.png'
import kids_tech from './../../../images/kids_tech.jpg'


const Third_Pane = () => (
     <div className="">
          <div className="uk-grid-collapse" data-uk-grid>
               
   



          <div className="uk-width-1-2@s uk-padding-large ">
                            <div className=" uk-margin-large-top">
                                <h3 className="uk-margin-top uk-margin-remove-left@">Why trust us with your child’s imagination and tech skills</h3>
                            </div>

                            <div className=" uk-margin-medium-top">
                            <div className="uk-grid-collapse" data-uk-grid>
                                   <div className="uk-width-1-5 uk-text-center">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className=" ">Introduce your child to programming and design with
                                       fun game projects and animation challenges</p>
                                   </div>
                            </div>


                             <div className="marginTopSmall">
                            <div className="uk-grid-collapse " data-uk-grid>
                                  
                                   <div className="uk-width-1-5 uk-text-center">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className=" ">Let your child be part of a smart group of friends
                                       who create together and share their projects </p>
                                
                                   </div>
                            </div>
                            </div>



                               <div className="marginTopSmall">
                            <div className="uk-grid-collapse " data-uk-grid>
                                   <div className="uk-width-1-5 uk-text-center">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5 uk-margin-left-remove">
                                      <p className=" ">Boost confidence and problem solving 
                                      abilities help him advance in school and in all aspects of life</p>
                                   </div>
                            </div>
                            </div>



                             <div className="marginTopSmall">
                            <div className="uk-grid-collapse " data-uk-grid>
                                   <div className="uk-width-1-5 uk-text-center">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className=" ">More than 10 years experience in delivering 
                                       tech-focused camps with top expert teachers to guide your child’s education
                                            </p>
                                   </div>
                            </div>
                            </div>


                            
                            <div className="marginTopSmall">
                            <div className="uk-grid-collapse " data-uk-grid>
                                   <div className="uk-width-1-5 uk-text-center">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className=" ">Schedule weekly options and choose Virtual 
                                      to take your child’s free time learning at home or anywhere
                                            </p>
                                   </div>
                            </div>
                            </div>

  
                            </div>



                            

                     </div>







               <div className="uk-width-1-2@s  ">
                  <div className=""
                  
                  style={{ backgroundImage: `url(${kids_tech})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  paddingBottom: '67px',
                  height: '75vh',
                    }}
                  
                  
                  >

                  </div>
               </div>
          </div>
     </div>
)



export default Third_Pane


