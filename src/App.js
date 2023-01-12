import { useState } from 'react';
import './App.css';
import Chessboard from './Chessboard';

function App() {
    const [board, setBoard] = useState([]);

    return (
        <div className="center">
            <h1>Chess</h1>
            <button onClick={() => setBoard(getStartBoard())}>Nouvelle partie</button>
            <Chessboard className="center" board={board}></Chessboard>
        </div>
    );
}

function getStartBoard() {
    return [['e4, e5, Cf3'], ['g5, f6, Kg4']];
}

export default App;
