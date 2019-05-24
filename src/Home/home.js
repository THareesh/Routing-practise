import React from 'react';
import {Link} from 'react-router-dom';


class Home extends React.Component {
  render(){
      return(
        <div>
            <h4>Home page</h4> 
     <header> 
       <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/login'>login</Link></li>
          <li><Link to='/dashboard'>dashboard</Link></li>
        </ul>
      </nav>
    </header> 
            

        </div>
      );
  }
}
export default Home;