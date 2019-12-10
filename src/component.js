import React, { Component } from 'react'
import Chip from "./sim.png"
import Visa from "./visa.png"

export default class Card extends Component {

//     // STATE 
   constructor() {
      super()
      this.state = {
        name: 'username',
        validUser: {status: true,message: ""},
        date: '08/20',
        valideDate :"",
        number: '1234 5678 1234 0547'}
    }
// //Handles

// Name Condition :
 handleChangeName=(n) =>{
  var nameRegex = (/^[a-zA-Z]+$/);

  if (!n.target.value.match(nameRegex)) {
    this.setState({ validUser: { status: false, message: "False , please only characters " }});
    alert ("tape only Text")
  } else if (n.target.value.length > 20) {
    this.setState({ validUser: { status: false, message: "False , Max length=20 " } });
    alert("Max length = 20")
  } else {
    this.setState({
      name: n.target.value.toUpperCase(),
     validUser: { status: true, message: "" }
    });
  }
}
//Handle Date form month/year
handleChangeDate=(e) =>{
      this.setState({
        date: e.target.value.substring(0, 2)+ "/"+  e.target.value.substring(4,6)
      });

    }

//Handle Card Number
  ChangeCardnumber=(c)=> {
    this.setState({
      number: c.target.value.slice(0, 4)+' ' + c.target.value.slice(4, 8)+' '+ c.target.value.slice(8, 12)+' '+ c.target.value.slice(12, 16)

    });   
 }
// RENDERING

render() {
    return (
       <div className="allcontainer">
                        <div className="container-card">
                       <div className="title"><span>Go My Code</span></div>
                       <div className="sim"><img  src={Chip}/></div> 
                      <div><p className="number-card" > {this.state.number} </p></div>
                      
                       <div className="footer-g">
                         <div className="footer-left">
                        <div><h4 className="ownername">{this.state.name}{this.state.valideUser}</h4></div> 
                        
                       </div>

                       <div>
                       <p className="date"> {this.state.date} </p>
                       </div>
                       <div> <img className="visa" src={Visa}/></div>
                       </div></div>
                     
                       <div  className="container-input-card">
                       <p className="title-purchase">Confirm Purchase</p>
                       <p className="text-title"  >Owner</p>
                       <input className="owner" placeholder="Your First Name" onChange= {this.handleChangeName} /><br/> 
                       <p className="text-title">Card Number</p>
                       <input className="cardnumber" placeholder="**** **** **** ****" maxLength="16" onChange={this.ChangeCardnumber}/><br/>
                       <p className="text-title"> Expiration Date </p>

                       <input type="number" placeholder="monthyear:082019" onChange={this.handleChangeDate.bind(this)}/>
                       
                       </div>
                       </div>
    )
    }
   }


