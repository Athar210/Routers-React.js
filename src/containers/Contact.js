import React from 'react';
import {Link} from "react-router-dom"

class Contact extends React.Component{
    gotohome=()=>{
        this.props.history.push('/')
    }
  render(){
    return(
      <div>
        <h2>this is Contact page</h2>
      <button onClick={this.gotohome}>Go To Home Page</button>
      </div>
    )
  }
}

export default Contact;