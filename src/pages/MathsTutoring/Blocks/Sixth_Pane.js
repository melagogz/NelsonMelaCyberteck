import react from 'react'
import stats1 from './../../../images/stats1.png'

import stats2 from './../../../images/stats2.png'

import stats8 from './../../../images/stats8.png'
import mathStatsBg from './../../../images/centerBg.png'


const Sixth_Pane = () => (
        
           <div >

               {/***DESKTOP VIEW**/}
                <div className="uk-visible@s"
                
                style={{ backgroundImage: `url(${mathStatsBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                paddingBottom: '27px',
                paddingTop: '27px',
                height: '40vh',
                  }}
                
                >
                    

              <div className="uk-container">
                      
                      <div className="uk-margin-top statsContainer  ">               
                 <div class="uk-grid-large uk-child-width-expand@s uk-text-center" data-uk-grid>

                 <div>
                         <div class="uk-margin-xlarge-top@s bIcon">
                             <img src={stats1}  className="statsImg"/>
                             
                             <h4 className="headerBold"> 81% Increase in academic results</h4>
                             
                         </div>
                     </div>




                         <div class="uk-margin-xlarge-top@s bIcon">
                             <img src={stats2}  className="statsImg"/>
                             
                             <h4 className="headerBold"> Of teachers believe math skills are a must</h4>
                             
                         </div>



                         <div class="uk-margin-xlarge-top@s bIcon">
                             <img src={stats8}  className="statsImg"/>
                             
                             <h4 className="headerBold"> Exercises for exam practice</h4>
                             
                         </div>

                 </div>

                 </div>
              </div>

                </div>


           
               {/***MOBILE VIEW**/}
               <div className="uk-hidden@s"
                
                style={{ backgroundImage: `url(${mathStatsBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                paddingBottom: '27px',
                paddingTop: '27px',
                height: '120vh',
                  }}
                
                >
                    

              <div className="uk-container">
                      
                      <div className="uk-margin-top statsContainer  ">               
                 <div class="uk-grid-large uk-child-width-expand@s uk-text-center" data-uk-grid>

                 <div>
                         <div class="uk-margin-xlarge-top@s bIcon">
                             <img src={stats1}  className="statsImg"/>
                             
                             <h4 className="headerBold"> 81% Increase in academic results</h4>
                             
                         </div>
                     </div>




                         <div class="uk-margin-xlarge-top@s bIcon">
                             <img src={stats2}  className="statsImg"/>
                             
                             <h4 className="headerBold"> Of teachers believe math skills are a must</h4>
                             
                         </div>



                         <div class="uk-margin-xlarge-top@s bIcon">
                             <img src={stats8}  className="statsImg"/>
                             
                             <h4 className="headerBold"> Exercises for exam practice</h4>
                             
                         </div>

                 </div>

                 </div>
              </div>

                </div>








           </div>
)


export default Sixth_Pane;