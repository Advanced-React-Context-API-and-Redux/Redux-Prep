import React, { useState } from "react";
import { connect } from "react-redux";
import { postPlayer } from "../actions"

const PlayerForm = (props) => {

    const [player, setPlayer] = useState({
        name: '',
        rank: '',
        nickname: ''
    });

    const submitHandler = e => {
        e.preventDefault();
        props.postPlayer(player);
    }

    const inputHandler = e => {
        setPlayer({ ...player, [e.target.name]: e.target.value })
    };

    return(
        <div>
            <form>
                <input 
                    type="text"
                    name="name"
                    label="name"
                    placeholder="Player Name"
                    value={props.name}
                    onChange={inputHandler}
                />
                <input 
                    type="text"
                    name="rank"
                    label="rank"
                    placeholder="Player Rank"
                    value={props.rank}
                    onChange={inputHandler}
                />
                <input 
                    type="text"
                    name="nickname"
                    label="nickname"
                    placeholder="Player Nickname"
                    value={props.nickname}
                    onChange={inputHandler}
                />
                <button onClick={submitHandler}>Add a player</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    { postPlayer }
)(PlayerForm)