import react from 'react';
import { Link } from 'react-router-dom';





const Fourth_Pane = () => (
       
           <div className="uk-container uk-margin-xlarge-top">
               <div className="uk-flex uk-flex-center">
               <div className="mediumContainer">
                    <div className="">
                         <h1 className="header1 uk-text-center">Choose from Math subjects available for tutoring</h1> 
                    </div>


               </div>

              <div>
                  
              </div>

               </div>





                 
                <div className="uk-margin-medium-top">
               <div class="uk-child-width-expand@s uk-text-center " data-uk-grid>
                            <div>
                                <div class="uk-card uk-card-default uk-card-body"><p className="uk-text-small greenText uk-text-bold uk-text-center">Pre-Algebra Tutoring </p></div>
                            </div>
                            <div>
                                <div class="uk-card uk-card-default uk-card-body"><p className="uk-text-small greenText uk-text-bold uk-text-center">Algebra Tutoring </p></div>
                            </div>
                            <div>
                             <Link to = "/AdvancedAlgebraII"  > <div class="uk-card uk-card-default uk-card-body"><p className="uk-text-small greenText uk-text-bold uk-text-center">Advanced Algebra II </p></div></Link>
                            </div>

                            <div>
                                <div class="uk-card uk-card-default uk-card-body"><p className="uk-text-small greenText uk-text-bold uk-text-center">Geometry Tutoring </p></div>
                            </div>
                  </div>




                  <div class="uk-child-width-expand@s uk-text-center" data-uk-grid>
                            <div>
                                <div class="uk-card uk-card-default uk-card-body"><p className="uk-text-small greenText uk-text-bold  uk-text-center">Pre-Calculus Tutoring </p></div>
                            </div>
                            <div>
                                <div class="uk-card uk-card-default uk-card-body"><p className="uk-text-small greenText uk-text-bold uk-text-center">Calculus Tutoring </p></div>
                            </div>
                            <div>
                                <div class="uk-card uk-card-default uk-card-body"><p className="uk-text-small greenText uk-text-bold uk-text-center">Trigonometry Tutoring </p></div>
                            </div>

                            <div>
                                <div class="uk-card uk-card-default uk-card-body"><p className="uk-text-small greenText  uk-text-bold uk-text-center">Statistics Tutoring </p></div>
                            </div>
                  </div>


</div>







              
           </div>

)


export default Fourth_Pane;