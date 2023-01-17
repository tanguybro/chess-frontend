import './Chessboard.css';
import Piece from './Piece';

function Chessboard({ board }) {
    console.log(board);
    return <div className="chessboard">{board.length > 0 ? renderBoard(board) : ''}</div>;
}
function renderBoard(board) {
    return [...Array(8)].map((x, i) => (
        <div className="board-row" key={i}>
            {[...Array(8)].map((x, j) =>
                renderPiece(board[i][j]?.square, board[i][j]?.type, board[i][j]?.color, ((i + j) * 3) % 2 == 0 ? 'white' : 'black')
            )}
        </div>
    ));
}

function renderPiece(square, type, color, squareColor) {
    return <Piece key={square} type={type} color={color} squareColor={squareColor} />;
}

export default Chessboard;
