import React, { Component } from 'react';
import styled from 'styled-components';
import VistaTres from './VistaTres';
import VistaDos from './VistaDos';

const changeColor = (props) => (`
background-color: red;
    color: ${props.color};
`);

const Styles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #888;
    margin-top: 2rem;
    margin-bottom: 2rem;

    .value{
        flex: 1;
        font-size: 2rem;
        color: ${props => changeColor(props)};
    }

    .vistados{
        padding-top: 5rem;
    }

    .vistatres{
        position: absolute;

        bottom: 0;
    }

    .vistatresprop{
        color: ${props => changeColor(props)};
        margin: 1rem;
    }

    .slider{
        flex: 6;
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background: #efefef;
        outline: none;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 15px;
            height: 15px;
            cursor: pointer;
            border-radius: 50%;
            background-color: white;
            box-shadow: 0 0 0 3px #000;
        }
    } 

`;

class VistaUno extends Component {

    state = {
        value: this.props.value
    }

    cambiarColor = () => {
        return this.state.value > 50 ? this.props.color : '#0fff0f';
    }

    handleOnChange = (e) => this.setState({ value: e.target.value });

    render() {

        return (
            <React.Fragment>
                <Styles color={this.cambiarColor()}>
                    <input type="range" min={0} max={100} value={this.state.value} onChange={this.handleOnChange} className="slider" />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3>Calor:</h3>
                        <div className="value">{this.state.value}</div>
                    </div>
                <VistaDos />
                <VistaTres val={this.state.value}/>
                </Styles>
            </React.Fragment>
        );
    }
}

export default VistaUno;