import { useEffect, useState } from "react";
import './../atLocationPage.css';
import ContactModal from './../../../features/ContactModal'
import {
    HeaderBox, HeaderDescription, HeaderTitle, PageBlock, PrimaryButton, PrimaryText, SecondaryText
} from "./../../../features/Atoms"

import {Link } from 'react-router-dom'



const First_pane = () => {
    const [contactModalStatus, setContactModalStatus] = useState(false);
     return (
        

         <div className="atLocationHeaderBg">

            <div className="uk-container uk-margin-xlarge-top">

                <div className="uk-grid" data-uk-grid>

                    <div className="uk-width-2-3@s">

                        <div>      
                         <h1 className="header1 light  uk-text-left"
                          uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Partnering with schools to shape young minds into future tech savvys</h1>
                             </div>

                             <div class="uk-flex withPadding ">
                         <Link to="/contactus"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Contact Uss</div> </Link>
                        
                      </div>
                    </div>

                    
                  

                    <div className="uk-width-1-3@s">
                        
                    </div>
                </div>

             </div>

             <ContactModal open={contactModalStatus} handleClose={() => setContactModalStatus(false)} />

         </div>
         
     )



}





export default First_pane ;