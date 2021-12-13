import  react from 'react';
import { Link } from 'react-router-dom'
import HeroBgTechLoc from './../../../images/tech_camp_at_locationBG.jpg'

import HeroBgTechLocSmall from './../../../images/tech_camp_at_locationBGSmall.jpg'




const First_Pane = () => (

     <div>
    
    {/***DESKTOP VIEW***/}
    <div className="uk-visible@s"
    
    style={{ backgroundImage: `url(${HeroBgTechLoc})`,
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
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true"> Take your Camp experience at a Location near you</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">We partnered up with Schools and Parks & Rec Centers to bring you 
                          summer and spring break Tech Camps at a convenient location for you. Your child can now live the camp experience on your own terms.</p>
                      </div>

                      <div class="uk-flex withPadding ">
                         <Link to="/contactuss"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Contact Usss</div> </Link>
                         
                      </div>
  
                 </div>

                 <div className="uk-width-1-4@s">
                     
                 </div>
            </div>
            </div>
        </div>




          
    {/***MOBILE VIEW***/}
    <div className="uk-hidden@s"
    
    style={{ backgroundImage: `url(${HeroBgTechLocSmall})`,
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
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true"> Take your Camp experience at a Location near you</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">We partnered up with Schools and Parks & Rec Centers to bring you 
                          summer and spring break Tech Camps at a convenient location for you. Your child can now live the camp experience on your own terms.</p>
                      </div>

                      <div class="uk-flex withPadding ">
                         <Link to="/contactuss"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Contact Usss</div> </Link>
                         
                      </div>
  
                 </div>

                 <div className="uk-width-1-4@s">
                     
                 </div>
            </div>
            </div>
        </div>


        

        </div>
);


export default First_Pane