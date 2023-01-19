import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './Chessboard.css';
import Piece from './Piece';
import Square from './Square';

export default function Chessboard({ board, move }) {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="chessboard">{board.length > 0 ? renderBoard(board, move) : ''}</div>
        </DndProvider>
    );
}

function renderBoard(board, move) {
    return [...Array(8)].map((x, i) => (
        <div className="board-row" key={i}>
            {[...Array(8)].map((x, j) =>
                renderSquare(
                    board[i][j]?.square,
                    board[i][j]?.type,
                    board[i][j]?.color,
                    ((i + j) * 3) % 2 == 0 ? 'white' : 'black',
                    move
                )
            )}
        </div>
    ));
}

function renderSquare(square, type, color, squareColor, move) {
    return (
        <Square key={square} color={squareColor} position={square} move={move}>
            {type != null ? <Piece piece={type} color={color} /> : ''}
        </Square>
    );
}
