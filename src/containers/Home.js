import React from 'react';
import {Link} from "react-router-dom"

class Home extends React.Component{
    gotocontact=()=>{
        this.props.history.push('/Contact')
    }
  render(){
    return(
      <div>
        <h2>this is Home page</h2>
        <button onClick={this.gotocontact}>Go To Contact Page</button>

      </div>
    )
  }
}

export default Home;