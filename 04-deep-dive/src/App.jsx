import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import GameOver from "./components/GameOver/GameOver";
import { WINNING_COMBINATIONS } from "./combinations";

function checkForWinningComb(turns) {
    if(turns.length < 3)
        return undefined;

    for (const combination of WINNING_COMBINATIONS) {
        let combPartsFound = 0;
        for (const winningSquare of combination) {
            let isFound = false;
            const { row, column } = winningSquare;

            for (const turn of turns) {
                const { square } = turn;
                if(square.row === row && square.col === column) {
                    isFound = true;
                    break;
                }
            }

            if(!isFound) {
                break;
            } else {
                combPartsFound = combPartsFound + 1;
            }
        }
        if(combPartsFound === 3) {
            return turns[0].player;
        }
    }

    return undefined;
}

let winner;

function App() {
    const [isCurrentTurnX, setIsCurrentTurnX] = useState(true);
    const [gameTurns, setGameTurns] = useState([]);

    function onGameBoardMove(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            let player = 'X';
            if(prevTurns.length && prevTurns[0].player === 'X')
                player = 'O';

            const currentTurns = [{ player, square: {row: rowIndex, col: colIndex}}, ...prevTurns];

            if(!winner) {
                const xTurns = currentTurns.filter(turn => turn.player === 'X');
                winner = checkForWinningComb(xTurns);
            }
            if(!winner) {
                const oTurns = currentTurns.filter(turn => turn.player === 'O');
                winner = checkForWinningComb(oTurns);
            }
            return currentTurns;
        })

        setIsCurrentTurnX(prevState => setIsCurrentTurnX(!prevState));
    }

    return (
        <main>
            <div id='game-container'>
                <ol id='players' className="highlight-player">
                    <Player symbol="X" initialName="Player 1" active={isCurrentTurnX}/>
                    <Player symbol="O" initialName="Player 2" active={!isCurrentTurnX}/>
                </ol>
                { winner && <GameOver winner={winner} /> }
                { !winner && gameTurns.length === 9 && <GameOver winner={winner} /> }
                <GameBoard isCurrentTurnX={isCurrentTurnX} onGameBoardMove={onGameBoardMove}/>
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}

export default App
