import './Chessboard.css';

function Chessboard({ board }) {
    console.log(board);
    return (
        <div className="chessboard">
            {/* 1 */}
            <div className="white">&#9820;</div>
            <div className="black">&#9822;</div>
            <div className="white">&#9821;</div>
            <div className="black">&#9819;</div>
            <div className="white">&#9818;</div>
            <div className="black">&#9821;</div>
            <div className="white">&#9822;</div>
            <div className="black">&#9820;</div>
            {/* 2 */}
            <div className="black">&#9821;</div>
            <div className="white">&#9821;</div>
            <div className="black">&#9821;</div>
            <div className="white">&#9821;</div>
            <div className="black">&#9821;</div>
            <div className="white">&#9821;</div>
            <div className="black">&#9821;</div>
            <div className="white">&#9821;</div>
            {/* 3 */}
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            {/* 4 */}
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            {/* 5 */}
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            {/* 6 */}
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            {/* 7 */}
            <div className="white">&#9817;</div>
            <div className="black">&#9817;</div>
            <div className="white">&#9817;</div>
            <div className="black">&#9817;</div>
            <div className="white">&#9817;</div>
            <div className="black">&#9817;</div>
            <div className="white">&#9817;</div>
            <div className="black">&#9817;</div>
            {/* 8 */}
            <div className="black">&#9814;</div>
            <div className="white">&#9816;</div>
            <div className="black">&#9815;</div>
            <div className="white">&#9813;</div>
            <div className="black">&#9812;</div>
            <div className="white">&#9815;</div>
            <div className="black">&#9816;</div>
            <div className="white">&#9814;</div>
        </div>
    );
}

export default Chessboard;
