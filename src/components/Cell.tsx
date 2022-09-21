import React, { useEffect, useState } from 'react';
import ColorMap from '../util/ColorMap';
import '../styles/cell.css'

interface IProps { 
    value: number; 
};

function Cell(props : IProps) {
    const [value, setValue] = useState(props.value);
    const [color, setColor] = useState(ColorMap[value] || "");

    useEffect(() => {
        setColor(ColorMap[value]); 
    }, [value]);

    // Empty cell
    if (value === 0){
        return <div className="cell" style={{backgroundColor: "#b3b3b3"}}></div>
    }

    return (
        <div className="cell" style={{backgroundColor:color}}>
            <h1>{value}</h1>
        </div>
    )

}

export default Cell;