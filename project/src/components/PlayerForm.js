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
        document.getElementById('playerForm').reset();
    }

    const inputHandler = e => {
        e.preventDefault();
        setPlayer({ ...player, [e.target.name]: e.target.value });
    };

    return(
        <div className="form">
            <form id="playerForm">
                <input 
                    type="text"
                    name="name"
                    label="name"
                    placeholder="Lionel Messi"
                    value={props.name}
                    onChange={inputHandler}
                    className="input"
                />
                <input 
                    type="text"
                    name="rank"
                    label="rank"
                    placeholder="1"
                    value={props.rank}
                    onChange={inputHandler}
                    className="input"
                />
                <input 
                    type="text"
                    name="nickname"
                    label="nickname"
                    placeholder="La Pulga"
                    value={props.nickname}
                    onChange={inputHandler}
                    className="input"
                />
                <button onClick={submitHandler} className="btn">Add a player</button>
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