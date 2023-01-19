import './Piece.css';

const pieces_codes = {
    w: {
        k: { __html: '♔' },
        q: { __html: '♕' },
        r: { __html: '♖' },
        b: { __html: '♗' },
        n: { __html: '♘' },
        p: { __html: '♙' },
    },
    b: {
        k: { __html: '♚' },
        q: { __html: '♛' },
        r: { __html: '♜' },
        b: { __html: '♝' },
        n: { __html: '♞' },
        p: { __html: '♟' },
    },
};

export default function Piece({ type, color }) {
    return <div dangerouslySetInnerHTML={pieces_codes[color][type]} className="piece"></div>;
}
