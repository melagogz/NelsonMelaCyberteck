import react from 'react'
import Layout from '../../Layout';
import First_Pane from './Blocks/First_Pane';
import Second_Pane from './Blocks/Second_Pane';
import './style.css'
import AmazingTeachersBlock from '../../HomePage/Blocks/AmazingTeachersBlock';


const AdvancedAlgebraII = () => (
    <Layout>
        <First_Pane />
        <Second_Pane />
      <div class="uk-margin-xlarge-top">  <AmazingTeachersBlock /></div>


</Layout>

)



export default AdvancedAlgebraII;






