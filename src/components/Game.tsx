import React, { useState } from 'react'; 
import generateInitialBoard from '../util/generateInitialBoard';
import Cell from './Cell';
import "../styles/game.css"

interface IProps{
    width: number; 
    height: number; 
    nRandomCells: number; 
    randomCellValue: number; 
}

function Game(props: IProps){
    const {width, height, nRandomCells, randomCellValue} = props;
    const [board, setBoard] = useState(generateInitialBoard(width, height, nRandomCells, randomCellValue))

    return (
            <div className='game'>
                <table cellSpacing={0} cellPadding={0}>
                    <tbody>
                        {board.map((row, i) => {
                            return (
                                <tr key={i}>
                                    {
                                        row.map((cell, j) => {
                                            return <td key={j}><Cell value={cell}/></td>;
                                        })
                                    }
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
    );
}

export default Game; 