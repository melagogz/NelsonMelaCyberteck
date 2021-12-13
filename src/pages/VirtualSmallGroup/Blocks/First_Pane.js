import react from 'react';
import { Link } from 'react-router-dom';
import virtyalGroupBg from './../../../images/virtual_group_bg.jpg'

import virtyalGroupBgSmall from './../../../images/virtual_group_bgSmall.jpg'







const First_Pane = () => (

      <section className="">

                 {/**DEKSTOP VIEW**/}
                <div className="uk-visible@s"
                
                style={{ backgroundImage: `url(${virtyalGroupBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                paddingBottom: '67px',
                height: 'auto',
                  }}
                
                
                >
            
            <div className="uk-container" >
            <div className="uk-grid  " data-uk-grid>
                 <div className="uk-width-3-4@s">
                      <div className="uk-margin-xlarge-top " >
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Build your own tech world with friends</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                            What is better than building your own universe in the best video 
                            games? Sharing it with friends. Guided by tech experts teachers, your 
                            child has the chance to explore his passion for video game design, 
                            3D modeling and animation.</p>

                            <p  className="uk-text-italic light uk-margin-small-top">Plus benefit: they learn coding fundamentals on top of boosting creative skills. </p>

                            <h4 className="light uk-text-bold">schedule a free 30 min discovery lesson with a live teacher</h4>

                          
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



            {/**MOBILE VIEW**/}
            <div className="uk-hidden@s"
                
                style={{ backgroundImage: `url(${virtyalGroupBgSmall})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                paddingBottom: '27px',
                height: 'auto',
                  }}
                
                
                >
            
            <div className="uk-container" >
            <div className="uk-grid  " data-uk-grid>
                 <div className="uk-width-3-4@s">
                      <div className="uk-margin-xlarge-top " >
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Build your own tech world with friends</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                            What is better than building your own universe in the best video 
                            games? Sharing it with friends. Guided by tech experts teachers, your 
                            child has the chance to explore his passion for video game design, 
                            3D modeling and animation.</p>

                            <p  className="uk-text-italic light uk-margin-small-top">Plus benefit: they learn coding fundamentals on top of boosting creative skills. </p>

                            <h4 className="light uk-text-bold">schedule a free 30 min discovery lesson with a live teacher</h4>

                          
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






      </section>

)



export default First_Pane;