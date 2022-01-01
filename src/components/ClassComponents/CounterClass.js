import React, { Component } from 'react'

class CounterClass extends Component {
    state = {
        counter: 0
    }

    sumar = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    restar = () =>{
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>{this.state.counter}</p>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </div>
        )
    }
}

export default CounterClass;