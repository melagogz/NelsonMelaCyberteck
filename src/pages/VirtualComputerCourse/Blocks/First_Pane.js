import react from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../../../features/ContactModal';
import { useState } from "react";
import { PrimaryButton } from '../../../features/Atoms';




export default function First_Pane(props) {
     const [ contactModalStatus, setContactModalStatus ] = useState(false);


     return (


          <div className="">
            <div className="heroBgVirtual">
            
            <div className="uk-container" >
            <div className="uk-grid  " data-uk-grid>
                 <div className="uk-width-3-4@s">
                      <div className="uk-margin-xlarge-top " >
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true"> Be the architect of your child’s tech future</h1>
                         
                          <p className="subTitleText uk-margin-small-top" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">We set your child on a path to success. Our Virtual 1-on-1 Computer
                           Courses encourage creativity and build impressive tech skill sets useful for their future.</p>

                           <p className="subTitleText uk-margin-small-top" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Do you want a college-bound pro? Let our tech expert teachers 
                           develop your child’s critical thinking abilities and design skills to get him ready.</p>
                      </div>

                      <div class="uk-flex withPadding ">
                         <Link to="/contactus"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Free 30mins Computer Lesson</div> </Link>
                        
                      </div>
  
                 </div>

                 <div className="uk-width-1-4@s">
                     
                 </div>
            </div>
            </div>
        </div>


















        
        </div>

     ) 


}


