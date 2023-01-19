import './Chessboard.css';
import Piece from './Piece';
import Square from './Square';

export default function Chessboard({ board, onClick }) {
    return <div className="chessboard">{board.length > 0 ? renderBoard(board, onClick) : ''}</div>;
}

function renderBoard(board, onClick) {
    return [...Array(8)].map((x, i) => (
        <div className="board-row" key={i}>
            {[...Array(8)].map((x, j) =>
                renderSquare(board[i][j]?.square, board[i][j]?.type, board[i][j]?.color, ((i + j) * 3) % 2 == 0 ? 'white' : 'black', onClick)
            )}
        </div>
    ));
}

function renderSquare(square, type, color, squareColor, onClick) {
    return (
        <Square key={square} color={squareColor} onClick={() => onClick(square)}>
            {type != null ? <Piece type={type} color={color} /> : ''}
        </Square>
    );
}
