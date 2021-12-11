import react from 'react';
import start1 from './../../../images/start1.png'
import start2 from './../../../images/start2.png'
import start3 from './../../../images/start3.png'


const Fifth_Pane = () => (
       <div className="uk-container uk-margin-xlarge-top">
             <div className="uk-flex uk-flex-center">
                   <div className="mediumContainer">
                        <h1 className="uk-text-center header1">Get Math Tutoring in 3 <span className="greenText">easy steps</span></h1>
                   </div>
             </div>

       
       {/****First Progress****/}
       <div className="uk-grid " data-uk-grid>
             <div className="uk-width-1-2@s uk-margin-large-top">
                  <div class="uk-grid uk-grid-collapse" dat-uk-grid>
                    <div class="uk-width-1-4">
                        <div class="uk-padding"> <h1 className="headerNumbers">1</h1></div>
                    </div>
                    <div class="uk-width-3-4">
                        <div class="uk-padding"><h4 className="uk-text-bold"> Register with our form</h4>
                        <p className="subText">Fill in the details of your child, age and subjects to be tutored. Specify the areas
                             you are interested in improving. Submit the form and we’ll contact you with a solution.</p>
                             </div>
                    </div>
                </div>
             </div>

             <div className="uk-width-1-2@s">
              <div>
                  <img src= {start1}  className="progressImg"/>
              </div>
             </div>

       </div>



             {/****second Progress****/}
             <div className="uk-grid " data-uk-grid>


             <div className="uk-width-1-2@s">
              <div>
                  <img src= {start2}  className="progressImg"/>
              </div>
             </div>


             <div className="uk-width-1-2@s uk-margin-large-top">
                  <div class="uk-grid uk-grid-collapse" dat-uk-grid>
                    <div class="uk-width-1-4">
                        <div class="uk-padding"> <h1 className="headerNumbers">2</h1></div>
                    </div>
                    <div class="uk-width-3-4">
                        <div class="uk-padding"><h4 className="uk-text-bold"> Let CyberTeck pick the best tutor </h4>
                        <p className="subText">Everything is based on your needs and details specified. Whether it’s exam preparation,
                         knowledge and in-depth understanding or homework assistance, we find the best option for your child.</p>
                             </div>
                    </div>
                </div>
             </div>

            

       </div>








             {/****third Progress****/}
             <div className="uk-grid " data-uk-grid>
             <div className="uk-width-1-2@s uk-margin-large-top">
                  <div class="uk-grid uk-grid-collapse" dat-uk-grid>
                    <div class="uk-width-1-4">
                        <div class="uk-padding"> <h1 className="headerNumbers">3</h1></div>
                    </div>
                    <div class="uk-width-3-4">
                        <div class="uk-padding"><h4 className="uk-text-bold"> Your child achieves their target</h4>
                        <p className="subText">Try our Discovery Lesson and see improvements from the first session.
                         Each tutoring hour is one step closer to passing that exam or getting to the next level in
                          math class. </p>
                             </div>
                    </div>
                </div>
             </div>

             <div className="uk-width-1-2@s">
              <div>
                  <img src= {start3}  className="progressImg"/>
              </div>
             </div>

       </div>





       </div>
)




export default Fifth_Pane