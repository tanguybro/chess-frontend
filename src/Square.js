import { useDrop } from 'react-dnd';

export default function Square({ color, position, move, children }) {
    const [{ isOver, piece }, drop] = useDrop(
        () => ({
            accept: 'piece',
            drop: () => {
                move(piece, position);
            },
            collect: (monitor) => ({
                piece: monitor.getItem(),
                isOver: !!monitor.isOver(),
            }),
        }),
        [position]
    );

    console.log(piece);

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
