import React from 'react';

export const NamesAmount = (props) => (
    <div>
        <h1>Totaal: {props.amountOfNames}</h1>
    </div>
);

const Name = (props) => (
    <div onClick={() => { props.handleClick(props.name) }}>
        {props.index}{props.seperator}{props.name}
    </div>

);

export default Name;