export default function Square({ color, onClick, children }) {
    return (
        <div className={color} onClick={onClick}>
            {children}
        </div>
    );
}
