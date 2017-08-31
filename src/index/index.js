import { render } from 'react-dom';
import React, { Component } from 'react';
import { Button, Input, Title, Label } from '../radium/components';
import Timer from './utils/Timer';


const handleRenderFinished = ({ renderTime }) => document.location.href += ',' + renderTime;


const renderTable = (lines = 10) => {
    const els = [];

    for (let i = 0; i < lines; i++) {
        els.push(<tr key={i}>
            <td><Title>title</Title></td>
            <td><Label>label</Label></td>
            <td><Button>button</Button></td>
            <td><Input type='text' /></td>
        </tr>);
    }

    return <Timer onRenderFinished={handleRenderFinished}>
        <table>
            <tbody>
                {els}
            </tbody>
        </table>
    </Timer>
};

const tableSize = 10000;
const REPEAT_TIMES = 15;

window.render = render;
window.renderTable = renderTable;

render(renderTable(tableSize), document.getElementById('app'));