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
                <Chessboard className="center" board={this.state.board} move={(piece, to) => this.move(piece, to)}></Chessboard>
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

    move(from, to) {
        console.log('move : ' + from + to);
        axios
            .post(API_URL + '/board/move', { move: from + to })
            .then(() => {
                this.updateBoard();
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
