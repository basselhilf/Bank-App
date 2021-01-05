import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {


    render() {
        return (
            <div>
               {this.props.data.map(t =>(
                <Transaction key = {t._id} t = {t} />
                ))}
            </div>
        )
    }
}

export default Transactions;