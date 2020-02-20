import React, { useEffect } from "react";
import PlayerCard from "./PlayerCard";

import { connect } from "react-redux";
import { fetchPlayers } from "../actions";

const PlayerList = props => {
    console.log(props);

    // const handlePlayers= e => {
    //     e.preventDefault();
    //     props.fetchPlayers();
    // }

    useEffect(() => {
        props.fetchPlayers();
    }, [])

    return(
        <div>
            <h1>Hello from the PlayerList component</h1>
            {props.players.map(player => (
                <PlayerCard key={player.id} player={player}/>
            ))}
        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect (
    mapStateToProps,
    { fetchPlayers }
)(PlayerList)