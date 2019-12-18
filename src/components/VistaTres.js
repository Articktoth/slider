import React, { Component } from 'react';
import styled from 'styled-components';

const Style = styled.div`
    display: flex;
    align-items: center;
`;

class VistaTres extends Component {

    render() {

        return (
            <Style className="vistatres">
                <h2>Calor: </h2>
                 
                <h2 className="vistatresprop"> {this.props.val}</h2>
            </Style>
        );
    }
}

export default VistaTres;