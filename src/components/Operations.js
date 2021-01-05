import React, { Component } from "react";

class Operations extends Component {
    constructor(){
        super()
        this.state = {
            amountInp : 0,
            vendorInp : "", 
            categoryInp : ""
        }
}

handleInput = e => {
    let inputValue = e.target.value;
    this.setState({
      [e.target.id]: inputValue
    })
}

deposit = () =>{
    let a = this.state.amountInp
    let v = this.state.vendorInp
    let c = this.state.categoryInp
    let status = "positive"
    this.props.deposit(a, v, c, status)
}
withdraw = () =>{
    let a = this.state.amountInp
    let v = this.state.vendorInp
    let c = this.state.categoryInp
    let status = "negative"
    this.props.balance > 500? this.props.withdraw(a, v, c, status) : console.log("not today")

}

  render() {
    
    return (
      <div id = "main-search">
        <input id = "amountInp" placeholder="Amount" onChange={this.handleInput} type="text" />
        <input id = "vendorInp" placeholder="Vendor" onChange={this.handleInput} type="text" />
        <input id = "categoryInp" placeholder="Category" onChange={this.handleInput} type="text" />
        <button id = "deposit" onClick = {this.deposit}>Deposit</button>
        <button id = "withdraw" onClick = {this.withdraw}>Withdraw</button>
      </div>
    )
  }
}

export default Operations;
