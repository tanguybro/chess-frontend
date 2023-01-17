import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Chessboard from './Chessboard';

const App = () => {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        axios.post('http://localhost/board/new-game').then(() => {
            axios.get('http://localhost/board').then((response) => {
                setBoard(response.data);
            });
        });
    }, []);

    return (
        <div className="center">
            {/* <Button onClick={async () => setBoard(await getStartBoard())}>Nouvelle partie</Button> */}
            <Chessboard className="center" board={board}></Chessboard>
        </div>
    );
};

export default App;
