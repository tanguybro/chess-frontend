import axios from 'axios';
import React from 'react';
import './App.css';
import Chessboard from './Chessboard';

const API_URL = process.env.REACT_APP_API_URL;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [],
        };
    }

    componentDidMount() {
        this.init();
    }

    render() {
        return (
            <div className="center">
                {/* <Button onClick={async () => setBoard(await getStartBoard())}>Nouvelle partie</Button> */}
                <Chessboard className="center" board={this.state.board} onClick={(square) => this.move(square)}></Chessboard>
            </div>
        );
    }

    updateBoard() {
        axios.get(API_URL + '/board').then((response) => {
            this.setState({
                board: response.data,
            });
        });
    }

    init() {
        axios.post(API_URL + '/board/new-game').then(() => {
            this.updateBoard();
        });
    }

    move(to) {
        console.log(to);
        axios
            .post(API_URL + '/board/move', { move: to })
            .then(() => {
                this.updateBoard();
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
