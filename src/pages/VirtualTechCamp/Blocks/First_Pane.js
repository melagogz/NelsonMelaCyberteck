import react from 'react';
import { Link } from 'react-router-dom';
import virtualTechCampBg  from './../../../images/virtTechCampBg.jpg'
import virtTechCampBgSmall from './../../../images/virtTechCampBgSmall.jpg'







const First_Pane = () => (

      <section className="">

                 {/**DESKTOP VIEW****/}
                <div className="uk-visible@s"
                  style={{ backgroundImage: `url(${virtualTechCampBg})`,
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
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Bring the experience of Camp into your home</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                          Access your child's inner creativity and bring their ideas
                          to life to empower future tech savvys. Technology-focused
                          camp courses to share with a smart group of friends from
                          the comfort of your own home.</p>

                           
                          
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














         {/**MOBILE VIEW****/}
         <div className="uk-hidden@s"
          style={{ backgroundImage: `url(${virtTechCampBgSmall})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          paddingBottom: '47px',
          height: 'auto',
            }}
         
         
         
         >
            
            <div className="uk-container" >
            <div className="uk-grid  " data-uk-grid>
                 <div className="uk-width-3-4@s">
                      <div className="uk-margin-xlarge-top " >
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Bring the experience of Camp into your home</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                          Access your child's inner creativity and bring their ideas
                          to life to empower future tech savvys. Technology-focused
                          camp courses to share with a smart group of friends from
                          the comfort of your own home.</p>

                           
                          
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