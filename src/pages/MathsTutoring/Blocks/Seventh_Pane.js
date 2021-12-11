import react from 'react';

import { Link } from 'react-router-dom'
import mathsCTA from  './../../../images/mathsCTA.png'



const Seventh_Pane = () => (
       <div className="uk-container">



<div className="uk-grid uk-grid-collapse" data-uk-grid>
                         <div className="uk-width-1-2@s">
                            <div className="CTAwidth"><img src={mathsCTA} uk-scrollspy="cls: uk-animation-slide-left; repeat: true"/></div>
                         </div>

                         <div className="uk-width-1-2@s">
                         <div className="uk-padding">
                          
                           <h3 className="header4 uk-margin-xlarge-top uk-text-left">Boost your child’s academic results
</h3>
                           <div className="uk-text-left ">
                           <p className="uk-padding-top" >Let our tutor apply their expertise and watch your child master Math. Increased chances to get 
                           on in-demand academic paths and improved results in math exams and tests. Everything made easy.</p></div>
                             
                             <Link to="/contactus">  <div class="btn uk-margin-top  single-btn" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">Learn More</div></Link>

                     </div>
                     </div>
                   </div>






    </div>

);


export default Seventh_Pane