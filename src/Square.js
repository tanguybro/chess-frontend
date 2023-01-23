import { useDrop } from 'react-dnd';

export default function Square({ color, position, move, children }) {
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: 'piece',
            drop: (item) => move(item.position, position),
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
            }}
        >
            {children}
        </div>
    );
}
