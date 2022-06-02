import React, {Component} from "react";
import Cell from "../Cell/Cell";
import './Board.css'

export default class Board extends Component {
    state = {
        boardEntity: {
            id1: {id: 'id1', value: 1},
            id2: {id: 'id2', value: 2},
            id3: {id: 'id3', value: 3},
            id4: {id: 'id4', value: 4},
            id5: {id: 'id5', value: 5},
            id6: {id: 'id6', value: 6},
            id7: {id: 'id7', value: 7},
            id8: {id: 'id8', value: 8},
            id9: {id: 'id9', value: 9},
            id10: {id: 'id10', value: 10},
            id11: {id: 'id11', value: 11},
            id12: {id: 'id12', value: 12},
            id13: {id: 'id13', value: 13},
            id14: {id: 'id14', value: 14},
            id15: {id: 'id15', value: 15},
            id16: {id: 'id16', value: ''}
        },
        boardID: ['id1', 'id2', 'id3', 'id4',
                'id5', 'id6', 'id7', 'id8',
                'id9', 'id10', 'id11', 'id12',
                'id13', 'id14', 'id15', 'id16'],
        modifiedBoardEntity: {
            id1: {id: 'id1', value: 1},
            id2: {id: 'id2', value: 2},
            id3: {id: 'id3', value: 3},
            id4: {id: 'id4', value: 4},
            id5: {id: 'id5', value: 5},
            id6: {id: 'id6', value: 6},
            id7: {id: 'id7', value: 7},
            id8: {id: 'id8', value: 8},
            id9: {id: 'id9', value: 9},
            id10: {id: 'id10', value: 10},
            id11: {id: 'id11', value: 11},
            id12: {id: 'id12', value: 12},
            id13: {id: 'id13', value: 13},
            id14: {id: 'id14', value: 14},
            id15: {id: 'id15', value: 15},
            id16: {id: 'id16', value: ''}
        }
    }

    pairCounter = 0;

    onClickHandler = (id) => () => {
        const {modifiedBoardEntity} = this.state;
        let swipeCellId = this.swipeCellId;
        let swipeCellVal = {};

        if (this.pairCounter === 2) {
            this.pairCounter = 0;
            swipeCellId = id;
            swipeCellVal = {};
        }

        if (swipeCellId !== id) {
            this.swipeCellId = id;
        }

        this.swipeCellId = id;

        for (const [key, value] of Object.entries(modifiedBoardEntity)) {
            if (key === swipeCellId) {
                swipeCellVal = value;
            }
        }

        console.log('swipeCellId: ' + swipeCellId + ' id: ' + id);


        for (let i in Object.keys(modifiedBoardEntity)) {
            for (let j in Object.keys(modifiedBoardEntity[i])) {
                console.log(j);
            }
        }


        if (typeof swipeCellId !== 'undefined') {
            this.setState({
                modifiedBoardEntity: {
                    ...modifiedBoardEntity,
                    [id]: {
                        ...modifiedBoardEntity[id],
                        value: swipeCellVal.value
                    },
                    [swipeCellId]: {
                        id: swipeCellId,
                        value: modifiedBoardEntity[id].value
                    }
                }
            })
        }
        ++this.pairCounter;
    }

    render() {
        const {boardID, modifiedBoardEntity} = this.state;

        return (
            <div className="board">
                {boardID.map(id => {
                    return (
                        <Cell key={modifiedBoardEntity[id].id}
                            onClickHandler={this.onClickHandler(id)}
                        >
                            {modifiedBoardEntity[id].value}
                        </Cell>
                    )
                })}
            </div>
        )
    }
}