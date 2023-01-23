import { useDrag } from 'react-dnd';

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

export default function Piece({ piece, color, position }) {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: 'piece',
            item: { position },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }),
        [position]
    );

    return (
        <div
            dangerouslySetInnerHTML={pieces_codes[color][piece]}
            ref={drag}
            style={{
                opacity: isDragging ? 0 : 1,
                cursor: 'grab',
                backgroundColor: '',
            }}
        ></div>
    );
}
