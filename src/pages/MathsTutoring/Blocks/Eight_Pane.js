import react from 'react'
import {Link } from 'react-router-dom'


const Eight_Pane = () => (

     <div className="mathsDiscovery">
              <div className="uk-container">
                    <div className="uk-flex uk-flex-center">
                        <div className="mediumContainer">
                        <h1 className="header1 light uk-text-center">Sign up for a Free <span className="greenText">Discovery Lesson</span></h1>
                        <p className="uk-text-center light"> Experience a 30 Minutes Computer Course with a Live Teacher. Choose your favorite course 
                            and get to see if we are the right fit for you. No strings attached.
                                   </p> 


                                   <div class="uk-flex uk-flex-center withPadding ">
                         <Link to="/contactus"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Discovery Lesson</div> </Link>
                        
                      </div>
                                   

 </div>
                          
                    


                    </div>
              </div>
     </div>

)


export default Eight_Pane;