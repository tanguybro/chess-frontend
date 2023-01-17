const pieces_codes = {
    w: {
        k: { __html: '&#9812;' },
        q: { __html: '&#9813;' },
        r: { __html: '&#9814' },
        b: { __html: '&#9815;' },
        n: { __html: '&#9816' },
        p: { __html: '&#9817' },
    },
    b: {
        k: { __html: '&#9818;' },
        q: { __html: '&#9819;' },
        r: { __html: '&#9820' },
        b: { __html: '&#9821;' },
        n: { __html: '&#9822' },
        p: { __html: '&#9823' },
    },
};

function Piece({ type, color, squareColor }) {
    return <div className={squareColor}>{type != null ? <div dangerouslySetInnerHTML={pieces_codes[color][type]}></div> : <div></div>}</div>;
}

export default Piece;
