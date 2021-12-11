import React from "react";
import { Link } from "react-router-dom";



const FirstPane = () => (

    <div className="mathsTutorBg">
            
            <div className="uk-container" >
            <div className="uk-grid  " data-uk-grid>
                 <div className="uk-width-3-4@s">
                      <div className="uk-margin-xlarge-top " >
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true"> Own Math in school and conquer all exams</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">The best version of your child with experienced tutors addressing
                           important Math topics for school</p>
                      </div>

                      <div class="uk-flex withPadding ">
                         <Link to="/contactus"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Discovery Lesson </div> </Link>
                             
                      </div>
  
                 </div>

                 <div className="uk-width-1-4@s">
                     
                 </div>
            </div>
            </div>
        </div>
)

export default FirstPane;