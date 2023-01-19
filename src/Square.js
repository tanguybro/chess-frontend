import { useDrop } from 'react-dnd';

export default function Square({ color, position, move, children }) {
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: 'piece',
            drop: (item) => {
                let piece = '';
                if (item.piece != 'p') {
                    piece = item.piece.toUpperCase();
                }

                move(piece, position);
            },
            //canDrop: () => canMoveTo(position),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [position]
    );

    return (
        <div
            className={color}
            ref={drop}
            style={{
                opacity: isOver ? 0.4 : 1,
                backgroundColor: isOver ? 'red' : '',
            }}
        >
            {children}
        </div>
    );
}

// async function canMoveTo(allowedMoves, position) {
//     const moves = await allowedMoves(position);

//     return moves.includes(position);
// }
