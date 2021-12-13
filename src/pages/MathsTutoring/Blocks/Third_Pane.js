import React from "react";
import { Link } from "react-router-dom";
import guarantee from "./../../../images/guaranteed.png"
import mathsLeftBg from "./../../../images/mathsBg.png"


const Third_Pane = () => (
          <div className="uk-margin-xlarge-top">
              <div className="uk-grid uk-grid-collapse" data-uk-grid>
                  <div className="uk-width-3-5@l">
                       <div className=""
                       
                       style={{ backgroundImage: `url(${mathsLeftBg})`,
                       backgroundRepeat: 'no-repeat',
                       backgroundSize: 'cover',
                       paddingBottom: '27px',
                       height: '66.6vh',
                         }}
                       
                       >
                           <p></p>
                       </div>
                  </div>

                  <div className="uk-width-2-5@l">
                       <div className="rightGreenBg uk-padding">
                           <div className="uk-margin-top">
                               <img src={guarantee} className="iconGurantee"/>
                               <h3 className="uk-text-bold header3 light">CyberTeck Academy Guarantee</h3>
                               <p className="subText light">Our tutors make sure to stimulate and encourage the best version of your 
                                   child. Passion for teaching, experience in tutoring methods and dedication
                                    to achieving results are put into your service.</p>
                           </div>
                       </div>
                  </div>

              </div>






          </div>
);


export default Third_Pane