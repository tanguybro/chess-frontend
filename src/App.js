import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Chessboard from './Chessboard';

function App() {
    const [board, setBoard] = useState([]);

    return (
        <div className="center">
            <Button onClick={async () => setBoard(await getStartBoard())}>Nouvelle partie</Button>
            <Chessboard className="center" board={board}></Chessboard>
        </div>
    );
}

async function getStartBoard() {
    return await axios.get('http://localhost/board').data;
}

export default App;
