import React, { Component } from 'react';

class VistaDos extends Component {

    constructor() {
        super();
        this.state = {
            minute: 0,
            second: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            return this.setState((state, props) => {
                return {
                    second: state.second == 59 ? 0 : state.second + 1,
                    minute: state.second == 59 ? state.minute + 1 : state.minute
                }
            });
        }, 1000);
    }

    render() {
        return (
            <div className="vistados">
                Tiempo: 
                <h1>{this.state.minute}:{this.state.second}</h1>
            </div>
        );
    }
}

export default VistaDos;