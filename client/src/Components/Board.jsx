import React, { Component } from 'react'
import { useState } from 'react';
import { Cell } from './Cell';
import '../Styles/Row.css'
import '../Styles/Board.css'
import { makeMove, possibleMoves, updateStatusGame } from '../Controller/controller';
import { useParams } from 'react-router-dom';
import {removeGreen, makeGreen} from '../Service/ClickCell'

export function Board() {

    const {id} = useParams();
    const {playerLogin} = useParams();
    const [board, setBoard] = useState([]);
    const [isReloaded, setIsReloaded] = useState(false)
    const [color, setColor] = useState()
    let selectedCell = []

    if (!isReloaded) {
        updateStatusGame(id, playerLogin).then(res => {
            setColor(res.yourColor)
            setBoard(res.field)
        });
        // updateStatusGame(id, playerLogin).then(res => setBoard(res.field))
        setIsReloaded(true);
    }

    function clickCell(x, y) {

        if (selectedCell.length === 0) {
            selectedCell = [x, y];
            makeGreen(id, playerLogin, x, y, color);
        } else if (document.getElementById(x+"_"+y).classList.contains(color > 0 ? "white" : "black")) {
            selectedCell = [x, y]
            removeGreen();
            makeGreen(id, playerLogin, x, y, color);
        }
        else {
            var request = makeMove( id, playerLogin, x, y, selectedCell[0], selectedCell[1]);
            selectedCell = [];
            removeGreen();
            request.then(res => setBoard(res));
        }
    }

    return (
        <div className='board'>
            {board.map((row, rowIndex) =>
                <div className='row' key={rowIndex}> 
                    {row.map((cell, cellIndex) => {
                        return <Cell number={cell} rowIndex={rowIndex} cellIndex={cellIndex} key={cellIndex} id={color > 0 ? rowIndex+"_"+cellIndex : (7 - rowIndex)+"_"+(7-cellIndex)}
                              onClick={() => cell != 0 || selectedCell.length > 0 ? clickCell(color > 0 ? rowIndex : 7-rowIndex, color > 0 ? cellIndex : 7 - cellIndex) : console.log(rowIndex, cellIndex)} 
                        />
                    })}
                </div>
            )}
        </div>
    )
}
