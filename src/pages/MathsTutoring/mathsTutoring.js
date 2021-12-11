import react from 'react';
import Layout from "../Layout";
import First_Pane from './Blocks/First_Pane'
import Second_Pane from './Blocks/Second_Pane'
import Third_Pane from './Blocks/Third_Pane'
import Fourth_Pane from './Blocks/Fourth_Pane';
import Fifth_Pane from './Blocks/Fifth_Pane'
import Sixth_Pane from './Blocks/Sixth_Pane'
import Seventh_Pane from './Blocks/Seventh_Pane'

import Eight_Pane from './Blocks/Eight_Pane'
import Testimonial from './../HomePage/Blocks/TestimonialBlock'
import Teachers from './../HomePage/Blocks/AmazingTeachersBlock'
import "./mathsTutoring.css"



const mathsTutoring = () => (
  <Layout>
    <First_Pane />
    <Second_Pane />
    <Third_Pane />
    <Fourth_Pane />
     <Fifth_Pane />
    <div className="uk-margin-xlarge-top">  <Testimonial /></div>
    <Sixth_Pane />
    <Seventh_Pane />
     <div className="uk-margin-xlarge-top">  < Teachers /> </div>
     <Eight_Pane />
   


      </Layout>
)



export default mathsTutoring ;