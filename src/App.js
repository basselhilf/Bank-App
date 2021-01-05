import React, { Component } from "react";
import "./App.css";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
const axios = require('axios')
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      balance: 0
    };
  }
  componentDidMount = () => {
   this.getDataFromDB()
  }

  getDataFromDB = async () =>{
      let transactions = await axios.get("http://localhost:3003/transactions")
      this.calcTotalBalance()
      this.setState({
        data : transactions.data
      }, function(){
        this.calcTotalBalance()
      })
     }

  calcTotalBalance = () => {
    let sum = this.state.data.map(a => a.amount).reduce((a, b) => a + b, 0)
    this.setState({
      balance : sum
    })
  }

  deposit = async (amount, vendor, category, status) => {
      let t1 = {amount, vendor , category, status}
      await axios.post("http://localhost:3003/transaction", t1)
      this.getDataFromDB()
  }

  withdraw = async (amount, vendor, category, status) => {
    amount *= (-1)
    let t1 = {amount, vendor , category, status}
    await axios.post("http://localhost:3003/transaction", t1)
    this.getDataFromDB()
}

 

  render() {
    return (
      <div id = "main-container">
        <Operations balance = {this.state.balance} deposit={this.deposit} withdraw = {this.withdraw}/>
        <h1>Current Balance: {this.state.balance}</h1>
        <Transactions data={this.state.data} balance = {this.state.balance} />
      </div>
    );
  }
}

export default App;
