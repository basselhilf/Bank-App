import React, { Component } from 'react';

class Transaction extends Component {
    
    render() {
        return (
            <div style = {{color: this.props.t.status === "positive" ? "green" : "red"}}>
              <span>{this.props.t.amount} </span>
              <span>{this.props.t.vendor} </span>
              <span>{this.props.t.category}</span>
            </div>
        )
    }
}

export default Transaction;